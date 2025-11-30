import os
import json
import requests
from bs4 import BeautifulSoup
import google.generativeai as genai
from dotenv import load_dotenv
import datetime

# Load environment variables
load_dotenv()

# Configure Gemini
API_KEY = os.getenv("GEMINI_API_KEY")
if not API_KEY:
    print("Warning: GEMINI_API_KEY not found in environment variables.")
    # We will continue, but summarization will be mocked or fail if called.

try:
    genai.configure(api_key=API_KEY)
    model = genai.GenerativeModel('gemini-2.0-flash')
except Exception as e:
    print(f"Error configuring Gemini: {e}")
    model = None

# Mock Feed Sources (In a real app, these would be RSS feed URLs)
# For this MVP, we will fetch the HTML of the main page and try to find headlines,
# or use a hardcoded list of article URLs to scrape.
SOURCES = [
    {
        "name": "TechCrunch",
        "url": "https://techcrunch.com/",
        "vertical": "AI & GenAI"
    },
    {
        "name": "HBR",
        "url": "https://hbr.org/",
        "vertical": "Leadership"
    }
]

def scrape_article(url):
    """
    Fetches the content of a page and extracts the main text.
    This is a simplified scraper for demonstration.
    """
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Heuristic to find the main article body
        # This varies heavily by site. For MVP, we grab all paragraphs.
        paragraphs = soup.find_all('p')
        text = ' '.join([p.get_text() for p in paragraphs])
        
        # Limit text length to avoid token limits if it's huge
        return text[:10000]
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return None

def summarize_content(text):
    """
    Uses Gemini to summarize the text into 5 bullet points.
    """
    if not model:
        return ["Gemini API Key missing. Mock summary bullet 1.", "Mock summary bullet 2."]
    
    prompt = """
    You are an executive intelligence assistant. 
    Summarize the following article text into exactly 5 concise, high-impact bullet points for a C-suite executive.
    Focus on strategic implications, not just facts.
    
    Article Text:
    {text}
    """
    
    try:
        response = model.generate_content(prompt.format(text=text))
        # Extract bullets from response text
        bullets = [line.strip().lstrip('•-* ') for line in response.text.split('\n') if line.strip()]
        return bullets[:5]
    except Exception as e:
        print(f"Error summarizing: {e}")
        return ["Error generating summary."]

def main():
    print("Starting Daily Digest generation...")
    briefing = []
    
    # For this MVP, since scraping main pages is complex without specific logic per site,
    # we will simulate finding an "article" by just using the main page content 
    # or a specific mock article if we had one. 
    # To make this runnable and useful immediately, let's use a specific article URL if possible,
    # or just scrape the home page and treat it as a "Market Overview".
    
    for source in SOURCES:
        print(f"Processing {source['name']}...")
        
        # In a real scenario, we'd parse the RSS feed to get individual article URLs.
        # Here, we'll just scrape the landing page as a proxy for "What's happening".
        content = scrape_article(source['url'])
        
        if content:
            print(f"  - Content fetched ({len(content)} chars). Summarizing...")
            summary_bullets = summarize_content(content)
            
            article_data = {
                "title": f"Latest from {source['name']}", # In real app, extract actual title
                "source": source['name'],
                "source_url": source['url'],
                "vertical": source['vertical'],
                "summary_bullets": summary_bullets,
                "published_at": datetime.datetime.now().isoformat()
            }
            briefing.append(article_data)
        else:
            print("  - Failed to fetch content.")

    # Output to JSON
    output_file = "todays_briefing.json"
    with open(output_file, "w") as f:
        json.dump(briefing, f, indent=2)
    
    print(f"\nBriefing generated successfully: {output_file}")
    print(f"Total articles: {len(briefing)}")

if __name__ == "__main__":
    main()

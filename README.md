````md
# News Portal with Puppeteer & Lighthouse Performance Auditing

## Overview

This project is a multi-page News Portal application built using React and React Router. The application demonstrates modern frontend development practices along with automated performance auditing using Puppeteer and Lighthouse.

The project includes:

- Articles Listing Page
- Article Detail Page
- Search Functionality
- Lazy Loaded Images
- Lighthouse Performance Auditing
- Puppeteer Automation
- Performance Report Generation
- Core Web Vitals Optimization

---

## Features

### Articles Listing Page

- Displays 20+ news articles.
- Each article contains:
  - Title
  - Excerpt
  - Featured Image
  - Link to Article Details
- Includes search functionality.
- Images are lazy-loaded using `loading="lazy"`.

### Article Detail Page

- Dynamic routing using `/article/:id`.
- Displays:
  - Article Title
  - Author Name
  - Published Date
  - Featured Image
  - Full Article Content (500+ words)
  - Back Navigation Link

### Search Page

- Accessible via `/search`.
- Displays:
  - Search Query
  - Number of Results Found
  - Filtered Articles

### Performance Testing

- Puppeteer launches a headless Chrome browser.
- Lighthouse audits application pages.
- JSON reports are generated automatically.
- Reports include:
  - Performance Score
  - Accessibility Score
  - Core Web Vitals Metrics

---

## Technologies Used

### Frontend

- React
- React Router DOM
- JavaScript
- CSS

### Performance Testing

- Puppeteer
- Lighthouse
- Node.js

---

## Project Structure

news-portal/
│
├── public/
│
├── src/
│ ├── components/
│ │ └── ArticleCard.jsx
│ │
│ ├── pages/
│ │ ├── Articles.jsx
│ │ ├── ArticleDetail.jsx
│ │ └── SearchResults.jsx
│ │
│ ├── data/
│ │ └── articles.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── tests/
│ └── performance/
│ ├── lighthouse-articles.test.js
│ └── lighthouse-detail.test.js
│
├── performance-reports/
│
├── package.json
└── README.md

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd news-portal
````

### Install Dependencies

```bash
npm install
```

### Install Required Packages

```bash
npm install react-router-dom
npm install puppeteer lighthouse --save-dev
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Application URL:

```text
http://localhost:5173
```

### Available Routes

Articles Page

```text
http://localhost:5173/articles
```

Article Detail Page

```text
http://localhost:5173/article/1
```

Search Page

```text
http://localhost:5173/search?q=news
```

---

## Running Performance Tests

Execute all Lighthouse audits:

```bash
npm run test:performance
```

This command will:

1. Launch Headless Chrome using Puppeteer.
2. Run Lighthouse audits.
3. Generate JSON reports.
4. Save reports in the performance-reports directory.

---

## Generated Reports

After running the tests, the following files will be generated:

```text
performance-reports/
├── articles-lighthouse.json
└── article-detail-lighthouse.json
```

---

## Required Test Files

```text
tests/performance/
├── lighthouse-articles.test.js
└── lighthouse-detail.test.js
```

---

## Data Test IDs

### Articles Page

```html
data-testid="articles-list"
data-testid="search-input"
data-testid="search-button"
data-testid="article-card-{articleId}"
data-testid="article-title-{articleId}"
data-testid="article-excerpt-{articleId}"
data-testid="article-link-{articleId}"
```

### Article Detail Page

```html
data-testid="article-title"
data-testid="article-author"
data-testid="article-date"
data-testid="article-content"
data-testid="article-featured-image"
data-testid="back-to-articles"
```

### Search Page

```html
data-testid="search-results-list"
data-testid="search-query-display"
data-testid="results-count"
```

---

## Performance Optimizations

### Lazy Loading

All article images use:

```html
<img loading="lazy" />
```

### Image Optimization

* Fixed width and height attributes
* Reduced layout shifts
* Improved CLS metric

### Lightweight Styling

* Minimal CSS
* No heavy UI frameworks
* Reduced render-blocking resources

### Optimized Assets

* Small bundle size
* Faster rendering
* Better Lighthouse performance score

---

## Lighthouse Performance Targets

| Metric                         | Target   |
| ------------------------------ | -------- |
| Performance Score              | ≥ 85     |
| Accessibility Score            | ≥ 90     |
| First Contentful Paint (FCP)   | ≤ 2.0 s  |
| Largest Contentful Paint (LCP) | ≤ 2.5 s  |
| Cumulative Layout Shift (CLS)  | ≤ 0.1    |
| Total Blocking Time (TBT)      | ≤ 300 ms |

---

## Package Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "test:performance": "node tests/performance/lighthouse-articles.test.js && node tests/performance/lighthouse-detail.test.js"
  }
}
```

---

## Verification Checklist

### Functional Requirements

* [x] Articles page available at `/articles`
* [x] Article detail page available at `/article/:id`
* [x] Search page available at `/search`
* [x] Minimum 20 articles displayed
* [x] Search functionality working
* [x] Dynamic article routing working

### Performance Requirements

* [x] Lazy-loaded images
* [x] Lighthouse performance audit implemented
* [x] Performance reports generated
* [x] Performance score ≥ 85
* [x] Accessibility score ≥ 90
* [x] FCP ≤ 2 seconds
* [x] LCP ≤ 2.5 seconds
* [x] CLS ≤ 0.1
* [x] TBT ≤ 300 milliseconds

### Submission Requirements

* [x] Source Code Included
* [x] README.md Included
* [x] package.json Included
* [x] Performance Test Files Included
* [x] Performance Reports Generation Included

---

## Author

Developed as part of the Frontend Development Performance Testing Assignment using React, Puppeteer, and Lighthouse.

```
```

# Sales Dashboard

A simple interactive dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts.  
Visualize sales data for 2022, 2023, and 2024 with bar, line, and pie charts. Includes atomic component structure, chart switching, and a custom sales threshold filter.

---

## Features

- Atomic component structure for scalability
- Interactive charts: Bar, Line, and Pie (Recharts)
- Filter sales data with a custom input
- Mock sales data (easy to swap with API)
- Ready for Next.js 15 App Router, TypeScript, Tailwind CSS

---

## Project Structure

```
sales-dashboard/
├── app/
│   └── dashboard/
│       └── page.tsx
├── components/
│   ├── charts/
│   │   ├── SalesBarChart.tsx
│   │   ├── SalesLineChart.tsx
│   │   └── SalesPieChart.tsx
│   ├── ChartSwitcher.tsx
│   └── CustomFilter.tsx
├── data/
│   └── salesData.ts
├── styles/
│   └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── README.md
```

---

## Getting Started (Development)

1. **Clone the repository**
   ```bash
   git clone git@github.com:arshadperampalli123-hash/sales-dashboard.git
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

---

## Deployment (Vercel)

This app is ready for instant deployment to [Vercel](https://vercel.com) or any Next.js-compatible hosting.

1. **Push to GitHub**
   - Make sure your code is committed and pushed.

2. **Import into Vercel**
   - Go to [Vercel](https://vercel.com/import/git)
   - Select your GitHub repo
   - Vercel auto-detects Next.js, TypeScript, Tailwind, etc.
   - Click **Deploy**

3. **Configure Environment Variables (optional)**
   - If you add API integration, set your API keys in Vercel’s dashboard.

---

## Further Enhancements

- **API Integration:** Fetch real sales data from an external API and display it.
- **Date Range & Filters:** Let users select custom date ranges or filter by product/category.
- **More Chart Types:** Add stacked, area, or radar charts.
- **Export & Sharing:** Allow exporting charts as images or PDFs.
- **Authentication:** Secure dashboard views with user login.
- **Mobile & Accessibility:** Improve responsiveness and accessibility.

---

## How to Use

- Open `/dashboard` route to view the dashboard.
- Use the input field to set a minimum sales threshold.
- Switch chart types using the Bar, Line, Pie buttons.

---

## Customization

- To use real data, replace `data/salesData.ts` with an API call.
- Easily add new chart types or dashboard widgets by creating new components in `/components`.

---

## Tech Stack

- Next.js 15 (App router)
- TypeScript
- Tailwind CSS
- Recharts

---

## Author

**arshadperampalli123-hash**

---

## License

MIT (add LICENSE file if needed)
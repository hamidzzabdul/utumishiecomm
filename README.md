# 🛒 Utumishi Computers Limited - E-Commerce Store

A modern, full-featured e-commerce web application for selling electronics including phones, laptops, and accessories. Built with React and integrated with WooCommerce API for seamless product management.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![WooCommerce](https://img.shields.io/badge/WooCommerce-API-96588A?style=flat&logo=woocommerce&logoColor=white)

## 📸 Screenshots

_(Add your screenshots here)_

## ✨ Features

### 🛍️ Shopping Experience

- **Product Catalog** - Browse extensive collection of electronics
- **Advanced Search** - Search products by name with real-time filtering
- **Smart Filtering** - Filter by category, price range, and stock status
- **Product Details** - Detailed product pages with images and specifications
- **Wishlist** - Save favorite products for later
- **Shopping Cart** - Add, remove, and manage cart items
- **Responsive Design** - Seamless experience across all devices

### 🔍 Search & Filter

- Client-side search for instant results
- Category filtering from navbar and sidebar
- Price range filters (Under 50k, 20k-50k, 80k-200k, Over 200k)
- Stock status filtering (in-stock only)
- Multiple filters can be combined
- URL-based filter state (shareable links)

### 📦 Product Management

- Real-time product data from WooCommerce
- Category-based organization
- Stock status tracking
- Sale price display
- Product image galleries

### 💳 Shopping Cart

- Add/remove products
- Quantity adjustment
- Real-time price calculation
- Persistent cart (localStorage)
- Clear cart functionality

### ❤️ Wishlist

- Save products for later
- Quick add to cart from wishlist
- Remove items from wishlist
- Persistent storage across sessions

### 📄 Additional Pages

- **About Us** - Company history and team
- **Contact** - Contact form and business information
- **Terms & Conditions** - Clear terms of service
- **Privacy Policy** - Data protection and privacy information

## 🚀 Tech Stack

- **Frontend Framework:** React 18.x
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **API Integration:** WooCommerce REST API
- **HTTP Client:** Axios
- **State Management:** React Context API
- **Local Storage:** For cart and wishlist persistence
- **Carousel:** Swiper.js

## 📁 Project Structure

```
utumishi-computers/
├── src/
│   ├── assets/          # Images and static assets
│   ├── Components/      # Reusable components
│   │   ├── ProductCard.jsx
│   │   ├── SidebarFilter.jsx
│   │   ├── Categories.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/         # Context providers
│   │   ├── CartContext.jsx
│   │   └── WishlistContext.jsx
│   ├── hooks/           # Custom hooks
│   │   ├── useProducts.js
│   │   └── useCategories.js
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── ShopPage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── WishlistPage.jsx
│   │   ├── AboutUs.jsx
│   │   ├── ContactUs.jsx
│   │   ├── TermsAndConditions.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── public/
├── .env                 # Environment variables
├── package.json
└── README.md
```

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- WooCommerce store with REST API enabled

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/utumishi-computers.git
   cd utumishi-computers
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_WOOCOMMERCE_URL=https://your-store.com
   VITE_WOOCOMMERCE_CONSUMER_KEY=your_consumer_key
   VITE_WOOCOMMERCE_CONSUMER_SECRET=your_consumer_secret
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

## 🔧 Configuration

### WooCommerce API Setup

1. Go to your WordPress admin dashboard
2. Navigate to WooCommerce > Settings > Advanced > REST API
3. Click "Add key"
4. Set permissions to "Read/Write"
5. Copy the Consumer Key and Consumer Secret
6. Add them to your `.env` file

### Tailwind CSS Configuration

The project uses custom Tailwind configuration for brand colors and utilities. Modify `tailwind.config.js` to customize:

```js
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
    maxWidth: {
      '350': '1400px', // Custom max-width
    }
  }
}
```

## 📱 Features Breakdown

### Client-Side Search

- Searches product names in real-time
- Sorts results by relevance (exact match → starts with → contains)
- Works seamlessly with other filters
- Fast and responsive

### Dynamic Filtering

- **Category Filter:** From navbar or sidebar
- **Price Filter:** Multiple price ranges
- **Stock Filter:** Show only in-stock items
- **Combined Filters:** All filters work together
- **URL State:** Filters reflected in URL for sharing

### Shopping Cart Features

- Add products with quantity
- Adjust quantities
- Remove items
- View total price
- Persistent storage
- Real-time updates

### Wishlist Features

- Heart icon on product cards
- Toggle add/remove
- View all saved items
- Add to cart from wishlist
- Persistent across sessions

## 🎨 Customization

### Brand Colors

Update the gradient colors in components:

```jsx
className = "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600";
```

### Product Display

Modify `ProductCard.jsx` to change product layout and information display.

### Categories

Update categories in `Categories.jsx` to match your WooCommerce categories.

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Utumishi Computers Limited**

- Website: [utumishicomputer.co.ke](https://utumishicomputer.co.ke)
- Email: info@utumishicomputer.co.ke
- Phone: 0706 328 544
- Location: Nairobi CBD, Moi Avenue, Kenya

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WooCommerce](https://woocommerce.com/)
- [Lucide Icons](https://lucide.dev/)
- [Swiper.js](https://swiperjs.com/)

## 📊 Project Status

🚀 **Active Development** - This project is actively maintained and new features are being added regularly.

---

Made with ❤️ by Utumishi Computers Limited

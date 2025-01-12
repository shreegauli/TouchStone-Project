# Touchstone Assignment: EcoStore Web Development Project

## Introduction
This document outlines the development process and features of the EcoStore website, an e-commerce platform focused on sustainable and eco-friendly products.

## Website Structure and Content

### Pages
1. Home Page (`app/page.tsx`)
   - Hero section with welcome message and call-to-action
   - Featured products section
2. Gallery Page (`app/gallery/page.tsx`)
   - Display of all products
3. About Us Page (`app/about/page.tsx`)
   - Company mission, values, and commitment to sustainability
4. Custom Orders Page (`app/custom/page.tsx`)
   - Form for custom product requests
5. Cart Page (`app/cart/page.tsx`)
   - Display of items in the cart
   - Total price calculation
   - Option to remove items

### Components
1. Navigation (`components/Navigation.tsx`)
   - Responsive menu
   - Cart icon with item count
2. Product Card (`components/ProductCard.tsx`)
   - Displays product information
   - "Add to Cart" functionality

## Website Design and Styling
- Utilized Tailwind CSS for responsive design
- Implemented a clean, modern aesthetic with a focus on readability
- Used shadcn/ui components for consistent UI elements
- Color scheme: 
  - Primary: Blue (#3b82f6)
  - Background: White (#ffffff) and Light Gray (#f3f4f6)
  - Text: Dark Gray (#1f2937)

## Website Functionality
1. Product Display
   - Grid layout for products on Gallery and Home pages
2. Shopping Cart
   - Add to cart functionality
   - Remove from cart option
   - Persistent cart using local storage
3. Custom Order Form
   - Form for users to submit custom product requests
4. Responsive Design
   - Mobile-friendly layout that adapts to different screen sizes

## Web Data Storage
- Utilized React Context API for state management (`contexts/CartContext.tsx`)
- Implemented local storage for persistent cart data

## Customization
- Created custom hooks for cart functionality
- Implemented custom layouts for different pages
- Designed a unique About Us page that reflects the company's eco-friendly mission

## Screenshots
[Include screenshots of key pages and features here]

## Challenges and Solutions
1. Challenge: Implementing a persistent shopping cart
   Solution: Used a combination of React Context and local storage to maintain cart state across page reloads.

2. Challenge: Creating a responsive design
   Solution: Utilized Tailwind CSS's responsive classes to ensure the website looks good on all device sizes.

## Conclusion
The EcoStore website successfully meets the client's requirements for an eco-friendly e-commerce platform. It provides a user-friendly interface for browsing products, managing a shopping cart, and submitting custom orders. The design and functionality align with the company's commitment to sustainability and quality.


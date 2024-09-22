import React, { Component } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

import logo from './logo2.png'

export default class Footer extends Component {
  render() {
    return (
        <div className='tw-bg-[#E9FEE7] p-4'>

      <div className='tw-flex  tw-items-center tw-text-4xl tw-justify-around'>
        {/* <img src="" alt="" />  */}
        <a href="#">
        <img src={logo} width={60} alt="" />
        
        </a>
        <div className='tw-text-4xl p-4 tw-space-x-4 tw-flex tw-justify-end'>
           <a href="#" >
           <FaFacebook className=' hover:tw-text-green-800'/>
            </a> 
           <a href="#">
           <FaInstagramSquare className=' hover:tw-text-green-800'/>
            </a> 
           <a href="#">
           <FaXTwitter className=' hover:tw-text-green-800'/>
            </a> 
           <a href="#">
           <FaLinkedin className=' hover:tw-text-green-800'/>
            </a> 
           <a href="#">
           <FaYoutube className=' hover:tw-text-green-800'/>
            </a> 
           <a href="#">
           <FaReddit className=' hover:tw-text-green-800'/>
            </a> 
        </div>
      </div>

      <footer class="tw-text-gray-600 tw-body-font">
  <div class="tw-container tw-px-5 tw-py-4 tw-mx-auto">
    <div class="tw-flex tw-flex-wrap tw-justify-around md:tw-text-left tw-text-center tw--mb-10 tw--mx-4">
      
      <div class="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
        <h2 class="tw-title-font tw-font-bold tw-text-xl tw-text-gray-900 tw-tracking-widest tw-mb-3">Integrations</h2>
        <nav class="tw-list-none tw-mb-10">
          <li className='hover:tw-text-green-500'>
            <a href='#'>
            eBay
            </a>
          </li>
          <li className='hover:tw-text-green-500'>
            <a href='#'>
            Amazon
              </a>
          </li>
          <li className='hover:tw-text-green-500'>
            <a href='#'>
            TikTok Shop


            </a>
          </li>
          <li className='hover:tw-text-green-500'>
            <a href='#'>
            PrestaShop
              </a>
          </li>

<li className='hover:tw-text-green-500'>

            <a href='#'>
          BigCommerce
          </a>
</li>
          <li className='hover:tw-text-green-500'>

            <a href='#'>
          Wix
          </a>
          </li>
          <li className='hover:tw-text-green-500'>

            <a href='#'>
          WooCommerce
          </a>
          </li>
          <li className='hover:tw-text-green-500'>

            <a href='#'>
          Squarespace
          </a>
          </li>
          <li className='hover:tw-text-green-500'>

            <a href='#'>
          Printify API
          </a>
          </li>
          <li className='hover:tw-text-green-500'>

            <a href='#'>
          Printify Pop-Up Store
          </a>
          </li>
          <li className='hover:tw-text-green-500'>

            <a href='#'>
          Shutterstock
          </a>
          </li>
        </nav>
      </div>

      <div class="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
        <h2 class="tw-title-font tw-font-bold tw-text-xl tw-text-gray-900 tw-tracking-widest tw-mb-3">Discover</h2>
        <nav class="tw-list-none tw-mb-10">
         

          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Blog
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Guides
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Products
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Etsy print-on-demand
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Shopify print-on-demand
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Woocommerce print-on-demand
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Wix print-on-demand
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Squarespace print-on-demand
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Make Your Own Shirt
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Brands
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Pricing
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Shipping Rates
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">
  
          Mockup Generator
</a>
          </li>
          </nav>
          </div>
      <div class="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
        <h2 class="tw-title-font tw-font-bold tw-text-xl tw-text-gray-900 tw-tracking-widest tw-mb-3">Start Selling</h2>
        <nav class="tw-list-none tw-mb-10">
          
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Custom T-shirts
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Custom Hoodies
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Custom Mugs
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Custom Socks
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Custom Backpacks
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Custom Branding
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Sell on Etsy
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Sell on Social Media
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Free T-shirt Designs
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Custom Products
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Custom All-Over-Print Hoodies
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Start a Clothing Line
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Start POD Business
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Bulk Orders
          </a>
          </li>
          <li className='hover:tw-text-green-500'>
          <a href="#">

          Transfering To Printify
          </a>
          </li>
        </nav>
      </div>
      <div class="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
        <h2 class="tw-title-font tw-font-bold tw-text-xl tw-text-gray-900 tw-tracking-widest tw-mb-3">Printif</h2>
        <nav class="tw-list-none tw-mb-10">
          
          <li className='hover:tw-text-green-500'>
<a href="#">

          Print on Demand
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Print Providers
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Experts Program
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Printify Express Delivery
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Become a Partner
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          About
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Printify Quality Promise
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Jobs
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Webinars
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Printing Profits Podcast
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Contact Us
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Affiliate
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Contact Sales
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          POD Glossary
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Network Fulfillment Status
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Merchant Protection
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Security
</a>
          </li>
          <li className='hover:tw-text-green-500'>
<a href="#">

          Sitemap
</a>
          </li>
        </nav>
      </div>
        



        </div>
        </div>

        <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left tw-text-gray-900">© 2024 Printify —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">All rights reserved</a>
      </p>
    </div>
  </div>
  
</footer>
</div>
    )
  }
}

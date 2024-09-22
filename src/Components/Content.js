import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa";

import { FcCheckmark } from "react-icons/fc";
import { FaRegPlayCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Image from 'react-bootstrap';
AOS.init();

export default class Navbar extends Component {
  render() {
    return (
    <div className='md:tw-m-8'>
      <section className='tw-flex tw-bg-slate-100 p-2 tw-justify-around md:tw-flex-row tw-flex-col md:tw-m-8'>
        <div className='md:tw-w-1/2 tw-m-5'>
          <h1 className='tw-text-6xl tw-font-bold m-4'>Create and sell custom products</h1>
          <ul>
          <li className='m-2'>          <FcCheckmark className='tw-inline-block mx-2 tw-text-xl'/>
100% Free to use</li>
          <li className='m-2'>          <FcCheckmark className='tw-inline-block mx-2 tw-text-xl'/>
900+ High-Quality Products
            </li>
              <li className='m-2'>          <FcCheckmark className='tw-inline-block mx-2 tw-text-xl'/>
Largest global print network
            </li>
          </ul>

          <div className='tw-m-4'>
            <button className='btn btn-success tw-font-bold tw-p-3 m-2'>Start for Free</button>
            <button className='btn tw-border-2 tw-font-bold tw-text-gray-600 hover:tw-border-gray-600 hover:tw-text-green-600 tw-border-gray-400 tw-p-3 m-2'><FaRegPlayCircle className='tw-inline-block tw-mr-1'/>How it works?</button>
            <div className='tw-font-bold tw-text-green-700'>Trusted by over 8M sellers around the world</div>
          </div>
        </div>
        <div>
          <img src="https://media2.giphy.com/media/d85b2lybyd6iQ/200w.gif?cid=6c09b952np9rsm0o0rztt3j6xstq4flxeb0ind66bunnfcl7&ep=v1_gifs_search&rid=200w.gif&ct=g" width={400} alt="" />
        </div>
      </section>

      <section className='tw-flex tw-items-center tw-bg-gray-50 tw-p-4 md:tw-flex-row tw-flex-col md:tw-justify-evenly tw-m-3'>
        <Card style={{ width: '18rem', border:"none" }} className='tw-items-center'>
          <Card.Img style={{width:"150px"}} variant="top" src="https://printify.com/pfh/assets/legacy/higher-profits.svg" />
          <Card.Body>
            <Card.Title>Higher Profits </Card.Title>
            <Card.Text>
            We offer some of the lowest prices in the industry because print providers continuously compete to win your business.            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border:"none" }} className='tw-items-center'>
          <Card.Img style={{width:"150px"}} variant="top" src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"/>
          <Card.Body>
            <Card.Title>  Robust Scaling </Card.Title>
            <Card.Text>
            Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.

            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', border:"none" }} className='tw-items-center'>
          <Card.Img style={{width:"150px"}} variant="top" src="https://printify.com/pfh/assets/legacy/best-selection.svg" />
          <Card.Body>
            <Card.Title>Best Selection
            </Card.Title>
            <Card.Text>
            With 900+ products and top quality brands, you can choose the best products for your business.

          </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className='tw-flex tw-bg-[#E9FEE7] p-4 md:tw-flex-row tw-flex-col md:tw-justify-evenly tw-m-3 tw-items-center'>
      <div>

        <img src="https://printify.com/pfh/media/clothes-CMPWJ6JG.webp" width={400} alt="" className='tw-bg-green-500 tw-rounded-xl'/>
        </div>
        <div className='md:tw-w-2/6'>
          <h1 className='tw-font-bold tw-text-3xl m-4'>Easily add your design to a wide range of products</h1>
          <p className='m-4'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
          <a href='#' className='m-4 tw-font-bold tw-text-md tw-text-green-600'>All products <FaArrowRight className='tw-inline-block'/></a>
        </div>
      </section>


      <section className='tw-flex md:tw-flex-row tw-flex-col md:tw-justify-evenly tw-m-3 tw-items-center'>
      <Card style={{ width: '18rem', border:"none", zIndex:-1, position:'relative' }} data-aos="slide-down" data-aos-duration="8000" className='tw-items-center'>
          <Card.Img style={{width:"150px"}} variant="top" src="https://printify.com/pfh/assets/legacy/custom-products.png" />
          <Card.Body>
            <Card.Title>Create
            </Card.Title>
            <Card.Title>custom products
            </Card.Title>
            <Card.Text>
            With 900+ products and top quality brands, you can choose the best products for your business.

          </Card.Text>
          </Card.Body>
        </Card>
      <Card style={{ width: '18rem', border:"none", zIndex:-1, position:'relative' }} data-aos="slide-down" data-aos-duration="8000" className='tw-items-center'>
          <Card.Img style={{width:"150px"}} variant="top" src="https://printify.com/pfh/assets/legacy/your-products.png" />
          <Card.Body>
            <Card.Title>Create
            </Card.Title>
            <Card.Title>custom products
            </Card.Title>
            <Card.Text>
            With 900+ products and top quality brands, you can choose the best products for your business.

          </Card.Text>
          </Card.Body>
        </Card>
      <Card style={{ width: '18rem', border:"none", zIndex:-1, position:'relative' }} data-aos="slide-down" data-aos-duration="8000" className='tw-items-center'>
          <Card.Img style={{width:"150px"}} variant="top" src="https://printify.com/pfh/assets/legacy/fullfillment.png" />
          <Card.Body>
            <Card.Title>Create
            </Card.Title>
            <Card.Title>custom products
            </Card.Title>
            <Card.Text>
            With 900+ products and top quality brands, you can choose the best products for your business.

          </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className='tw-flex md:tw-flex-row tw-flex-col md:tw-justify-evenly tw-m-3 tw-items-center'>
        <div>
      <section className='tw-flex md:tw-flex-row tw-flex-col md:tw-justify-evenly tw-m-3 tw-items-center'>
        <h1 className='tw-text-4xl tw-font-bold md:tw-w-2/6 tw-m-5 tw-relative tw-z-10 tw-bg-white'>Trusted by over 8M sellers around the world
        </h1>
        <div className='md:tw-w-2/6 tw-relative -tw-z-20' data-aos="slide-right" data-aos-duration="4000">Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.

</div>




      </section>
        </div>
      </section>

      <section className=' tw-bg-slate-800 tw-items-center tw-relative tw-m-auto tw-text-gray-100 md:tw-w-4/6 tw-flex tw-justify-center' data-aos="slide-left" data-aos-duration="8000">
      <div>
      <section className='tw-flex md:tw-flex-row tw-flex-col md:tw-justify-evenly tw-m-3 tw-items-center'>
        <div>
        <h1 className='tw-text-4xl tw-font-bold md:tw-w-4/6 tw-m-5'>Make Money, Risk-Free
        </h1>
        <h2 className='tw-m-2 tw-my-6'>

        You pay for fulfillment only when you make a sale
        </h2>

        <div className='tw-bg-gray-900 tw-p-4 tw-rounded-xl tw-mt-10'>
          <div className='tw-flex tw-font-bold tw-justify-between tw-p-4 tw-px-8'>
            <h1>You sell a t-shirt</h1>
            <h2>$30</h2>

          </div>
          <div className='tw-flex tw-font-bold tw-justify-between tw-p-4 tw-px-8'>
            <h1>You pay for its production</h1>
            <h2>$12</h2>
          </div>
          <hr className='tw-w-4/6 tw-relative tw-m-auto'/>
          <div className='tw-flex tw-justify-between tw-text-green-700 tw-font-bold tw-text-xl tw-p-4 tw-px-8'>
            <h1>Your profit</h1>
            <h2>$18</h2>
          </div>

        </div>

        <button className='btn btn-success tw-font-bold m-4'>Start Selling</button>
        <div>100% Free to use · 900+ Products · Largest print network</div>
        </div>
        <div className='tw-relative tw-left-9 tw-top-5 md:tw-w-3/6 tw-hidden md:tw-block' data-aos="slide-right" data-aos-duration="10000">
        <img src="https://i.ibb.co/gyHkZRW/Screenshot-2024-09-21-223134.png" height={600} alt="" />

</div>
      </section>
        </div>
      </section>
    </div>
  );
}
}

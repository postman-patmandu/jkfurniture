import React from 'react'
import ScrollTop from '../../utils/scroll-top.utils';
import { Helmet } from 'react-helmet-async';
// import Meta from '../../components/meta/meta.component';

const SupportScreen = () => {
  const title="Rustic Furniture, Furniture Shop, Furniture Store Suport Page";
  const description = "Support for Rustic Furniture Shop NZ, The Furniture Store";
  const keywords = "Rustic Furniture, Furniture Shop, Furniture Shop NZ, furniture store, furniture stores, furniture stores, the furniture shop, Support for Rustic Furniture Shop NZ";
  return (
    <div>
      <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href="https://www.furnitureshop.nz/support" />
            {/* <Meta tite={metaDetails.title} description={metaDetails.description} keywords={metaDetails.keywords} /> */}
        </Helmet>
      {/* <Meta title={title} description={description} keywords={keywords} /> */}
        <h1 className='mt-4'>Customer Support for Furniture Shop</h1>
        <p>At Furniture Shop, we are committed to providing exceptional customer service to ensure a smooth and satisfying shopping experience. Below, you’ll find answers to frequently asked questions, support resources, and how to contact us for assistance.</p>
        <hr />
        <h3>1. <strong>Frequently Asked Questions (FAQs)</strong></h3>
        <h4><strong>Ordering</strong></h4>
        <p><strong>Q: How do I place an order?</strong><br />A: Simply browse our website, add your desired products to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information, and confirm your order.</p>
        <p><strong>Q: Can I make changes to my order after it’s placed?</strong><br />A: We process orders quickly, but if you need to make changes, contact us as soon as possible at furnitureshopnz@gmail.com or call John Hawke on 021 804 922. We’ll do our best to accommodate your request.</p>
        <p><strong>Q: How do I track my order?</strong><br />A: Once your order ships, we’ll send you a confirmation email with a tracking number. You can also track your order by logging into your account.</p>
        <hr />
        <h4 id="#shipping"><strong>Shipping &amp; Delivery</strong></h4>
        <p><strong>Q: How long does delivery take?</strong><br />A: Delivery times vary based on your location and the product ordered. Typical delivery times are between 3-7 business days.</p>
        <p><strong>Q: What are the shipping costs?</strong><br />A: Shipping costs are calculated based on the delivery location and the size/weight of your items. Price of item already includes shipping fees.</p>
        <p><strong>Q: Do you offer international shipping?</strong><br />A: At this time, we ship nation wide. We do not offer international shipping.</p>
        <hr />
        <h4 id="returns"><strong>Returns &amp; Exchanges</strong></h4>
        <p><strong>Q: What is your return policy?</strong><br />A: We accept returns of eligible products within 15 days of delivery. Items must be in their original condition and packaging.</p>
        <p><strong>Q: How do I initiate a return?</strong><br />A: To start a return, contact our customer support team at furnitureshopnz@gmail.com or call John Hawke on 021 804 922. We’ll provide instructions on how to return your item and any applicable shipping costs.</p>
        <p><strong>Q: When will I receive my refund?</strong><br />A: Refunds will be processed once the returned item has been received and inspected. It typically takes 5-10 business days for the refund to appear in your account.</p>
        <hr />
        <h4><strong>Product Information</strong></h4>
        <p><strong>Q: Are the colors and materials of the products exactly as shown online?</strong><br />A: We strive to accurately represent all products, but due to variations in screens and natural materials, slight differences in color and texture may occur.</p>
        <p><strong>Q: Do you offer assembly services?</strong><br />A: Many of our products require assembly, and we provide detailed instructions with each item. We also offer assembly services for select items. Check the product page or contact us for more information.</p>
        <p><strong>Q: How can I care for my furniture?</strong><br />A: For maintenance tips and care instructions, refer to the product descriptions or contact our support team. Proper care will ensure the longevity of your furniture.</p>
        <hr />
        <h3>2. <strong>Contact Customer Support</strong></h3>
        <p>If you have questions or need assistance, our customer support team is ready to help. We aim to respond to all inquiries within 24 hours.</p>
        <ul>
            <li><strong>Email</strong>: furnitureshopnz@gmail.com</li>
            <li><strong>Phone</strong>: 021 804 922 (Monday – Friday, 9am-5pm)</li>
        </ul>
        <hr />
        <h3>3. <strong>Warranty &amp; Repairs</strong></h3>
        <p><strong>Q: Do your products come with a warranty?</strong><br />A: Yes, many of our products come with a manufacturer’s warranty. The warranty coverage is typically specified in the product description. If you believe your product is defective, please contact us for further assistance.</p>
        <p><strong>Q: Can I request a replacement part or repair service?</strong><br />A: If your item arrives damaged or you need replacement parts, contact us at furnitureshopnz@gmail.com or call John Hawke on 021 804 922. We’ll assist with getting your product repaired or replaced.</p>
        <hr />
        <h3>4. <strong>Account &amp; Billing</strong></h3>
        <p><strong>Q: How do I create an account?</strong><br />A: To create an account, click the "Sign Up" button on our website, and enter your information. Having an account allows you to track orders, save your favorite items, and manage your details.</p>
        {/* <p><strong>Q: How do I reset my password?</strong><br />A: If you forget your password, click “Forgot Password” on the login page, and follow the instructions to reset it.</p> */}
        <p><strong>Q: What payment methods do you accept?</strong><br />A: We accept major credit cards, debit cards, and other payment options such as Apple Pay. Payment is processed securely at checkout.</p>
        <hr />
        <h3>5. <strong>Special Offers &amp; Promotions</strong></h3>
        <p><strong>Q: How can I find out about sales and special promotions?</strong><br />A: Sign up for our newsletter or follow us on social media to stay updated on our latest offers, sales, and new product arrivals.</p>
        <p><strong>Q: Can I use more than one discount code?</strong><br />A: Only one discount code can be applied per order. However, we frequently offer promotions and sales, so check back regularly.</p>
        <hr />
        <p>We’re here to make your shopping experience as enjoyable as possible. If you have any other questions or need further assistance, please don’t hesitate to reach out to us.</p>
        <p>Thank you for shopping with Furniture Shop!</p>
        <ScrollTop />
    </div>
  )
}

export default SupportScreen;
import React from 'react'
import ScrollTop from '../../utils/scroll-top.utils';
import Meta from '../../components/meta/meta.component';

const PrivacyScreen = () => {
    const title="Rustic Furniture, Furniture Shop, Furniture Store Privacy Policy";
    const description = "Privacy Policy for Rustic Furniture Shop NZ, The Furniture Store";
    const keywords = "Rustic Furniture, Furniture Shop, Furniture Shop NZ, furniture store, furniture stores, furniture stores, the furniture shop, Privacy Policy";
  return (
    <div>
        <Meta title={title} description={description} keywords={keywords} />
        <h1 className='mt-4'>Privacy</h1>
        
        <h3 className='mt-4'>Privacy Policy for Furniture Shop</h3>
        <p><strong>Effective Date:</strong> 21 September 2024</p>
        <p>At Furniture Shop, we value and respect the privacy of our customers. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or make a purchase from our website.</p>
        <h3 className='mt-5'>1. <strong>Information We Collect</strong></h3>
        <p>We collect various types of information in order to provide you with the best shopping experience possible:</p>
        <ul>
        <li>
            <p><strong>Personal Information</strong>: This includes your name, shipping and billing address, email address, phone number, and payment information when you make a purchase or register for an account.</p>
        </li>
        <li>
            <p><strong>Non-Personal Information</strong>: We collect information about your device, browsing actions, and usage patterns. This includes details like your IP address, browser type, and referring website.</p>
        </li>
        <li>
            <p><strong>Cookies and Tracking Technologies</strong>: We use cookies, web beacons, and similar technologies to enhance your experience on our site, recognize you on future visits, and serve you with relevant promotions and advertisements.</p>
        </li>
        </ul>
        <h3 className='mt-5'>2. <strong>How We Use Your Information</strong></h3>
        <p>We may use your information for a variety of purposes, including but not limited to:</p>
        <ul>
        <li>
            <p><strong>Processing Transactions</strong>: To process orders, manage payments, and deliver products.</p>
        </li>
        <li>
            <p><strong>Improving User Experience</strong>: To personalize your experience on our website, improve website functionality, and develop new products and services.</p>
        </li>
        <li>
            <p><strong>Marketing and Promotions</strong>: To send you newsletters, special offers, and other communications you may find valuable, if you have consented to receiving such materials.</p>
        </li>
        <li>
            <p><strong>Customer Support</strong>: To respond to your inquiries, handle complaints, and provide customer service.</p>
        </li>
        <li>
            <p><strong>Legal Compliance</strong>: To comply with legal obligations, protect our rights, and prevent fraud or illegal activities.</p>
        </li>
        </ul>
        <h3 className='mt-5'>3. <strong>How We Share Your Information</strong></h3>
        <p>We do not sell or rent your personal information to third parties. However, we may share your information in the following ways:</p>
        <ul>
        <li>
            <p><strong>Service Providers</strong>: We may share your information with trusted third-party service providers who assist us with tasks like payment processing, order fulfillment, website maintenance, and email marketing.</p>
        </li>
        <li>
            <p><strong>Legal Obligations</strong>: If required by law or in response to legal processes, we may disclose your personal information to law enforcement or regulatory agencies.</p>
        </li>
        <li>
            <p><strong>Business Transfers</strong>: In the event of a merger, acquisition, or sale of our business, your information may be transferred as part of the business assets.</p>
        </li>
        </ul>
        <h3 className='mt-5'>4. <strong>Security of Your Information</strong></h3>
        <p>We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it. This includes the use of encryption for sensitive data and secure server infrastructures.</p>
        <p>However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee the absolute security of your information.</p>
        <h3 className='mt-5'>5. <strong>Your Choices and Rights</strong></h3>
        <p>You have certain rights regarding your personal information, including:</p>
        <ul>
        <li>
            <p><strong>Access and Update</strong>: You can access and update your account information at any time by logging into your account.</p>
        </li>
        <li>
            <p><strong>Opt-Out</strong>: You may opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.</p>
        </li>
        <li>
            <p><strong>Delete or Restrict</strong>: You can request the deletion or restriction of your personal data in certain circumstances, subject to legal requirements.</p>
        </li>
        </ul>
        <h3 className='mt-5'>6. <strong>Third-Party Links</strong></h3>
        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites, and we encourage you to read their privacy policies before sharing your information with them.</p>
        <h3 className='mt-5'>7. <strong>Children’s Privacy</strong></h3>
        <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children without verifiable parental consent.</p>
        <h3 className='mt-5'>8. <strong>Changes to this Privacy Policy</strong></h3>
        <p>We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
        <h3 className='mt-5'>9. <strong>Contact Us</strong></h3>
        <p>If you have any questions or concerns about this Privacy Policy or our practices regarding your personal information, please contact us at:</p>
        <p>Furniture Shop<br />Email: support@furnitureshop.nz<br />Phone: 027 524 1211</p>
        <hr />
        <p>By using our website and services, you agree to the collection and use of your information in accordance with this Privacy Policy.</p>
        <ScrollTop />
    </div>
  )
}

export default PrivacyScreen;
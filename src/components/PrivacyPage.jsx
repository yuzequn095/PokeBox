import '../css/PrivacyPage.css';

function PrivacyPage(){
    return(
        <div className="private__policy">
            <h1>Privacy Policy of PokéBox</h1>
            <p>Company Name operates the Website Name website, which provides the SERVICE. </p>
            <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Website Name website.</p>
            <p>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
            <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Website URL, unless otherwise defined in this Privacy Policy.</p>
        
            <h3>Policy Navigation</h3>
            <p>For your convenience, you can click the policy name below and jump to specific part.</p>
            <ul className="policy__list">
                <li><a href="#information__collect" class="skip">Information Collection and Use</a></li>
                <li><a href="#log__data" class="skip">Log Data</a></li>
                <li><a href="#cookies__info" class="skip">Cookies</a></li>
                <li><a href="#service__provider" class="skip">Service Providers</a></li>
                <li><a href="#security__info" class="skip">Security</a></li>
                <li><a href="#link__sites" class="skip">Links to Other Sites</a></li>
                <li><a href="#children__privacy" class="skip">Children's Privacy</a></li>
                <li><a href="#changes__policy" class="skip">Changes to This Privacy Policy</a></li>
                <li><a href="#contact__us" class="skip">Contact Us</a></li>
            </ul>
            
            <h3 id="information__collect">Information Collection and Use</h3>
            <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>
        
            <h3 id="log__data">Log Data</h3>
            <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

            <h3 id="cookies__info">Cookies</h3>
            <p>Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.</p>
            <p>Our website uses these “cookies” to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>

            <h3 id="service__provider">Service Providers</h3>
            <p>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
        
            <h3 id="security__info">Security</h3>
            <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

            <h3 id="link__sites">Links to Other Sites</h3>
            <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

            <h3 id="children__privacy">Children's Privacy</h3>
            <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>

            <h3 id="changes__policy">Changes to This Privacy Policy</h3>
            <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>

            <h3 id="contact__us">Contact Us</h3>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
        </div>
    );
}

export default PrivacyPage;
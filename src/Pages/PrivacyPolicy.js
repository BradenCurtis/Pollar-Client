import { useNavigate } from "react-router-dom";

export const PrivacyPolicy = () => {

    const navigate = useNavigate();

    const returnHome = () => {
        navigate("/login");
    }

    return (
        <div className="privacyWhole">
            <div className="privacyTitle">
                <p>Privacy Policy</p>
                <button className="privacyButton" onClick={returnHome}>Return to Login</button>
            </div>
            

            <p className="privacyBody">Thank you for visiting Poll-ar. Your privacy and security are important to us. Please read this Privacy Policy carefully to understand how we collect, use, and safeguard your personal information on this site.</p>
            <p className="privacyHeader">Information We Collect:</p>
            
            <p className="privacyBody">We do not collect any personal information from users on this website. We do not use cookies or other tracking technologies to collect data about your browsing activities.</p>
            <p className="privacyHeader">Use of Personal Information:</p>
            <p className="privacyBody">Since we do not collect any personal information, we do not use it for any purpose.</p>
            <p className="privacyHeader">Security:</p>
            <p className="privacyBody">This website is not secure. We use minimal encryption and have few security measures in place to protect your personal information. Therefore, we advise against providing any personal data, including but not limited to names, usernames, frequently used passwords, or any other sensitive information on this website.</p>
            <p className="privacyHeader">Third-Party Links:</p>
            <p className="privacyBody">This website may contain links to third-party websites posted by other users. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
            <p className="privacyHeader">Children's Privacy:</p>
            <p className="privacyBody">This website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you are under 13 years of age, please do not provide any personal information on this website.</p>
            <p className="privacyHeader">Changes to This Privacy Policy:</p>
            <p className="privacyBody">We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted on this page with a revised effective date. We encourage you to review this Privacy Policy periodically for any updates.</p>
            <p className="privacyHeader">Contact Us:</p>
            <p className="privacyBody">If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at [bobthebuilderbobthebuilder13@gmail.com].</p>
            <p className="privacyBody">By using this website, you agree to the terms of this Privacy Policy. If you do not agree with this Privacy Policy, please do not use this website.</p>
            
            <p className="privacyBody">Last updated: [2/22/24]</p>
            
            <p className="privacyLogo">[Poll-ar]</p>
        </div>
    )
}
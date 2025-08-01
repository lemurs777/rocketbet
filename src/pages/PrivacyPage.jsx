import React, {useEffect} from 'react';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const privacyListSm = ['Privacy Policy', 'Effective from: 9.1.22\n', 'Last updated: 9.1.22\n']
  return (

    <main className="main main--privacy">
      <div className="container">


      <div className="rules">
        <h1 className="title">Privacy Policy</h1>
        <ul className="rules__descr">
          {privacyListSm.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        <div className="rules__content">
          <div className="textBlock">
            <h2>1. General</h2>
            <p>As a data controller, we have a legal obligation under gambling regulations to process personal data from
              players in order to allow them to participate in games and provide them with ancillary services. This
              Privacy Policy explains what personal data we collect from players, why we collect it and how we utilize
              it.
            </p>
            <p>
              By registering a Player Account with the website RocketBet ("Casino", "Website", “Company”, "We", "Us",
              "Our") you confirm your consent with this Privacy Policy. If you do not agree with the terms of this
              Privacy Policy and do not wish to provide us with the personal information we require, please do not use
              this website.
            </p>
            <p>

              Please note that this Privacy Policy constitutes an agreement between you and the Company. We may
              periodically make modifications to this Policy. While we will do our best to notify you of such changes,
              we recommend that you revisit this Privacy Policy regularly. Your continued use of the Website and/or its
              services will constitute your consent to the Privacy Policy.
            </p>
          </div>

          <div className="textBlock">
            <h2>2. Information We Collect</h2>
            <p>Our website may use “cookies” to enhance User experience. User’s web browser places cookies on their hard
              drive for record-keeping purposes and sometimes to track information about them. User may choose to set
              their web browser to refuse cookies or to alert when cookies are being sent. If they do so, note that some
              parts of the Website may not function as intended.</p>
            <p>Personal identification information <br/>
              The Personal Information which we may request to use, and process shall include, without limitation:
            </p>
            <ul>
              <li>Any of the information that you provide to us when filling in the forms on our account registration
                pages, as well as any other data that you further submit via the Website or email (e.g. first and last
                name, date of birth, email address, phone number);
              </li>
              <li>Correspondence made with us via the Website, email, web chat or through other means of communication.
              </li>
              <li>
                All Player Account transaction history, whether this takes place via the Website(s) or via other means
                of
                communication.
              </li>
              <li>
                Website logins and their details, including traffic data, GeoIP location data, browser/device data,
                weblogs, activity logs and other traffic information recorded in our system; e) Documents and proofs
                reasonably requested by us to verify your account, to process deposits or withdrawals and to conduct
                anti-fraud checks (on our own initiative or as required by applicable legislation). Such proofs may
                include passport scans, payment slips, bank statements, etc.
              </li>
              <li>
                Survey participations or any other customer assessments that we may carry out from time to time.
              </li>
            </ul>
          </div>
          <div className="textBlock">
            <h2>3. How we use information</h2>
            <p>We process the Personal Information we collect from you in order to deliver our services. In particular,
              we
              will use your data for the following purposes:
            </p>
            <ul>
              <li>
                Processing your bets and transactions. This includes your use of online payment systems
              </li>
              <li>
                Providing you with gaming and other ancillary services that you seek from our Website;
              </li>
              <li>
                Rendering customer support, such as assistance with setting up and managing your account;
              </li>
              <li>
                Identifying and performing the necessary verification checks;
              </li>
              <li>
                Providing registered players with information about our promotional offers, or providing promotional
                information from our selected business partners, associates and affiliates (only if players specifically
                consented to receiving such marketing material);
              </li>
              <li>
                Complying with legal responsibilities, including complying with anti-money laundering (AML) and
                combating
                the financing of terrorism (CFT) laws;
              </li>
              <li>
                Monitoring and investigating transactions for the purposes of preventing fraud, terms abuse, money
                laundering and other illegal or irregular gaming activities.
              </li>
              <li>
                Analyzing customer trends through market study assessments (participation in surveys is not obligatory
                and
                you can always choose not to take part);
              </li>
              <li>
                Conducting research and statistical analysis of aggregated data.
              </li>
            </ul>
          </div>
          <div className="textBlock">
            <h2>4. Marketing Communication</h2>
            <p>Unless you have elected not to receive promotional materials, we may use your Personal Information,
              including your email address and phone number, to send you marketing communications regarding products,
              services and promotions. This may include information about products and services from our business
              partners, such as casino game providers. Whenever you decide to stop receiving such marketing and
              advertising material, you may opt out of this in your Player Account settings or by contacting our
              customer
              support at <a href="mailto:support@RocketBet.com.">support@RocketBet.com.</a></p>
            <p>Additionally, note that by accepting any contest prize or winnings from us, you consent to the use of
              your
              name and/or nickname for advertising and promotional purposes without additional compensation, except
              where
              prohibited by law.
            </p>
          </div>
          <div className="textBlock">
            <h2>5. Obtaining Personal Information</h2>
            <p>We shall not collect any Personal Information about you without your knowledge. We may, however,
              automatically collect certain data about you where you would have provided such information through the
              use
              of our services and through your interactions with us.
            </p>
            <p>
              We may also lawfully receive certain Personal Information from online vendors and service providers, such
              as
              fraud prevention companies. In addition, we retain the right to engage the services of third-party
              providers
              to render technical support, to process your online transactions and source gaming content.
            </p>
            <p>
              Please understand that we may be granted access to any information you may provide to such vendors,
              service
              providers and third-party e-commerce services. Rest assured that we will use and safeguard any Personal
              Information so obtained, as set out in this Policy. Any information that you provide will only be
              disclosed
              to third parties outside the Company in accordance with this Privacy Policy, and we shall take any
              necessary
              steps to ensure that our agreements with third-party service providers always protect your private
              information.
            </p>

          </div>
          <div className="textBlock">
            <h2>6. Data Recipients</h2>
            <p>
              We may pass information that you have given us to other entities within our group of companies and to our
              business partners. These companies include our parent companies, their parent companies and all of the
              subsidiaries of these respective companies, as well as other companies with whom we carry out business and
              hold necessary agreements. Data processing of your information may be undertaken by a third party company
              to fulfill such data processing needs.
            </p>
            <p>

              Employees of the Company, more specifically Data Protection Officer, Money Laundering Officer, Payments &
              Anti-Fraud analysts, Customer Support agents, Customer Retention team members, VIP player managers as well
              as other selected employees, shall also have access to your Personal Information for the purpose of
              executing their duties and providing you with assistance.
            </p>
            <p>
              Our employees who have access to, or are associated with the processing of the player’s personal
              information, have signed confidentiality agreements to respect the confidential nature of the player’s
              information pursuant to applicable gaming, data protection and privacy laws.
            </p>
            <p>
              In order to provide you with an efficient service, we and/or our service providers might require
              transferring your personal data from one country to another in the European Union (EU) and European Free
              Trade Association (EFTA) regions and also to some data processors that may be based outside of the
              European Economic Area (EEA). Therefore, by browsing the Website and communicating electronically with us,
              you acknowledge and agree to our (or our suppliers or sub-contractors) processing of your data in these
              countries. We shall always use our best efforts to ensure that your information and data is treated
              securely and in accordance with this Privacy Policy.
            </p>
          </div>
          <div className="textBlock">
            <h2>7. Releasing Data To Third Parties</h2>
            <p>We do not sell or rent your personal data to third parties.
            </p>
            <p>
              We may disclose your personal information if required by law, regulation, or other legal subpoena or
              warrant. We may also disclose your personal information to a regulatory or law enforcement agency if we
              believe it to be necessary to protect the legitimate interests of the Company, its customers or any third
              party.
            </p>
            <p>
              Personal data will only be disclosed to third parties in the following cases:
            </p>
            <ul>
              <li>
                Where we are required to do so by law;
              </li>
              <li>
                To comply with our legal and regulatory duties and responsibilities to the relevant licensing and
                regulatory authorities as well as all duties and responsibilities owed under any other applicable
                legislation and to any other applicable regulators in other jurisdictions;
              </li>
              <li>
                When the Company believes that disclosure is necessary to protect the Company’s or the player’s safety,
                or the safety of others, investigate fraud, or respond to a government request;
              </li>
              <li>
                If our marketing service providers require the data to carry out their tasks;
              </li>
              <li>
                To any other third party with the player’s prior consent to do so.
              </li>
            </ul>
            <p>We use third-party data processors to process limited personal data on our behalf. Such service providers
              support the Website, especially relating to hosting and operating the websites, marketing, analytics,
              improving the websites, and sending email newsletters. We shall ensure that the transfer of the Personal
              Data to the recipient is compliant with applicable Data Protection Legislation and that the same
              obligations are imposed on the processor as is imposed on us under the respective Services Agreement.
            </p>
            <p>
              Our websites may also include social media features (e.g. “share” or “like” buttons). Such features are
              provided by third-party social media platforms such as Facebook. Where data is collected this way, its
              processing is governed by the privacy policy of the respective social media platforms.
            </p>
            <p>
              In addition to the above, we may also release personal data if we acquire any new businesses. Should the
              Company undergo any changes to its structure such as a merger, acquisition by another company or a partial
              acquisition, it is most likely that our customers’ personal data will be included within the sale or
              transfer. We will, as part of our Policy, inform our players by email prior to affecting such transfer of
              personal data.
            </p>
            <p>
              Please note our content may link to third party websites to provide relevant references. We are not
              responsible for such external content, which may contain separate privacy policies and data processing
              disclosures.
            </p>
          </div>
          <div className="textBlock">
            <h2>8. Data Retention</h2>
            <p>
              As stated under our Terms and Conditions both, you and the Casino can decide to have your Player Account
              closed at any time. Following closure of your account, we will retain your personal data on record for as
              long as required by law. This data shall only be used should it be required by competent authorities in
              cases of enquiries regarding financial and fiscal records, fraud, money laundering or investigations into
              any other illegal activity.
            </p>
            <p>
              You are to note that due to anti-money laundering regulations in licensed gaming jurisdictions in the
              European Union, we are obliged to retain personal data of players submitted during registration and any
              data passed on during the operative period of a Player Account for a minimum of five years from last
              player transaction or account closure. Therefore, requests for erasure prior to the lapse of this period
              cannot be entertained.
            </p>
          </div>
          <div className="textBlock">
            <h2>9. Security Of Your Data</h2>
            <p>
              We hereby acknowledge that in collecting and processing your Personal Information for the purposes of
              managing your Player Account, we are bound by strict legal provisions on the protection of personal data.
            </p>
            <p>
              Consequently, we endeavor to protect your personal information and respect your privacy in accordance with
              best business practices and applicable regulations. Being committed to providing secure services to
              players, and we will take all reasonable precautions to ensure that all the data that you have submitted
              to us remains safe.
            </p>
            <p>
              Player Accounts can only be accessed with the player’s unique ID and password. You may also set up
              two-factor authentication (2FA) as additional protection from unauthorized use of your account. You are
              responsible for keeping your login information confidential and making sure it cannot be accessed by
              another person.
            </p>
          </div>
          <div className="textBlock">
            <h2>10. Contacting Us</h2>
            <p>
              You may always contact us in regard to this Policy should you wish to:
            </p>
            <ul>
              <li>
                Confirm the accuracy of the personal information we have collected about you;

              </li>
              <li>
                Enquire about our use of your personal information;

              </li>
              <li>
                Prohibit future use of your data for direct marketing purposes.

              </li>
              <li>
                Update or rectify any information that you have provided us (in such cases you shall provide any
                evidence we may reasonably require to effect such changes). Note it is illegal to provide us with false
                information about you and it is your responsibility to ensure that we are always updated with your
                correct data.
                In addition, as per Article 77 of the GDPR, you have the right lodge a complaint related to your data
                processing to a supervisory authority, in particular in the Member State of your habitual residence,
                place of work or place of an alleged infringement.

              </li>
            </ul>
          </div>
          <div className="textBlock">
            <h2>11. Cookie Policy</h2>
            <p>
              When you visit the Website, our system automatically collects information about your visit, such as your
              browser, IP address, and the referring website. This collection may be done in conjunction with our
              platform providers and partners. We may receive from them general demographic or usage data of our Website
              visitors. We do not use automatically collected information to identify you personally without receiving
              additional consent.
            </p>
            <p>
              To collect the information in question we use cookies and similar tracking tools. Cookies are small text
              files that are stored on your computer or equipment when you visit our web pages. Some of the cookies are
              essential for the Website to operate; others improve your Website experience and help us deliver a better
              service. Below are the types of cookies we use and their purposes.
            </p>
            <p>

              Required cookies: enable the navigation and basic functionality of the websites, e.g., access to member
              areas of the Website.
            </p>
            <p>
              Functional cookies: allow us to analyze your website usage and your selections on the website (e.g. your
              session key, language, or region), so we can save these settings and offer you a more personalized
              experience.
            </p>
            <p>
              Advertising cookies: allow us to gauge how effective our content marketing is. These cookies are provided
              by our partners to track website visits and new player registrations from advertising. We do not share
              your personal information (such as name or email) to affiliated partners except for site visit data
              collected directly by such Advertising Cookies. However, your site visit data may be linked with other
              personal information collected through other sources by the providers. The latter external data processing
              is governed by the privacy notices and policies of these third-party providers.
            </p>
            <p>
              In addition to the above, we use a number of third-party service providers who also set cookies on this
              Website, in order to deliver the services that they are providing to us. Such services include, but are
              not limited to, helping us to improve your experience by tracking your activity on the Website, measuring
              the effectiveness of the Website and the effectiveness of our marketing campaigns.
            </p>
            <p>
              Most online browsers automatically accept cookies. If you prefer, it is possible to block some or all
              cookies, or to delete cookies that have already been set by modifying your browser settings. However, we
              recommend that you do not block or delete your cookies as this may restrict your use of our Website.
            </p>
          </div>
        </div>
      </div>   </div>
    </main>
  );
};

export default PrivacyPage;
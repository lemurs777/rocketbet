import React, {useEffect} from 'react';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const termsListSm = ['Privacy Policy', 'Effective from: 9.1.22\n', 'Last updated: 9.1.22\n']
  return (

    <main className="main main--terms">
      <div className="container">


      <div className="rules">

        <h1 className="title">Terms of Service</h1>
        <ul className="rules__descr">
          {termsListSm.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        <div className="rules__content">
          <div className="textBlock">
            <h2>1. General</h2>
            <p>
              1.2 Before using our website, please read these Terms and Conditions carefully. By registering a Player
              Account with the website, you agree and confirm your consent to the Terms and Conditions stipulated below.
            </p>
            <p>
              1.3 If you do not accept these Terms and Conditions, you are not allowed to use the services of the
              Casino.
            </p>
            <p>
              1.4 The Casino reserves the right to unilaterally change these Terms and Conditions when such need occurs.
              We will do our best to notify our players of any significant changes by email. However, we do recommend
              all players to revisit this page regularly and check for possible changes.
            </p>
            <p>
              1.5 The main language of the Casino website is English, and any translation errors are interpreted in
              favor of the Casino.
            </p>

          </div>
          <div className="textBlock">
            <h2>2. Who Can Play</h2>
            <p>
              2.1 The Casino accepts Players only from those countries and geographic regions where online gambling is
              allowed by law. It is the Player’s sole responsibility to inquire about the existing gambling laws and
              regulations of the given jurisdiction before placing bets on the website.
            </p>
            <p>

              2.2 The Casino accepts strictly adult Players (the minimum age is 18) and Players who have reached the age
              specified by the jurisdiction of Player’s place of residence as eligible for online gaming. It is the
              Player’s sole responsibility to inquire about the existing laws and regulations of the given jurisdiction
              regarding age limitations for online gambling. 2.3 The Casino reserves the right to ask for proof of age
              from the Player and limit access to the Website or suspend the Player Account to those Players who fail to
              meet this requirement.
            </p>
            <p>
              2.4 It is entirely and solely your responsibility to enquire and ensure that you do not breach laws
              applicable to you by participating in the games. Depositing and playing is subject to the laws of your
              country, and it is your sole responsibility to abide by your native regulations.
            </p>
            <p>
              2.5 Users from the following countries and their territories (“Restricted Countries”) are not allowed to
              deposit and play: Albania, Angola, Barbados, Belgium, Burkina Faso, Cayman Islands, Central African
              Republic, Republic of the Congo, Democratic Republic of the Congo, Curacao, Côte d'Ivoire, Dutch West
              Indies, Eritrea, Ethiopia, France and its overseas territories (Guadeloupe, Martinique, French Guiana,
              Réunion, Mayotte, St. Martin, French Polynesia, Wallis and Futuna, New Caledonia), Gibraltar, Greece,
              Haiti, Hungary, Iraq, Islamic Republic of Iran, Israel, Jamaica, Jersey, North Korea, Lebanon, Liberia,
              Libya, Lithuania, Mali, Mauritius, Mayotte, Myanmar, Nicaragua, Pakistan, Panama, Rwanda, Sierra Leone,
              Somalia, South Sudan, Spain, Sudan, Syrian Arab Republic, Uganda, Yemen, Zimbabwe, the Netherlands, the
              United Kingdom, the United States of America. The Casino cannot guarantee successful processing of
              withdrawals or refunds in the event that Player breaches this Restricted Countries policy.
            </p>
            <p>
              2.6 Any bonuses are not available to Players from Sweden, including participation in any kind of
              promotional programs, receiving VIP rewards, as well as exchange of comp points. Deposit bonuses are
              unavailable for the players from Finland.
            </p>
            <p>
              2.7 The Casino cannot guarantee successful processing of withdrawals or refunds in case of breaching
              current Limitations of Use policy.
            </p>
            <p>
              2.8 Age Verification Procedure for cryptocurrencies. In order to be able to play in cryptocurrencies,
              Player must provide the Casino with the proof that they are at least 18 years old or above (valid ID,
              Passport or Driving License or any other valid document). Failure to provide the Casino with valid ID,
              Passport or Driving License will lead to Player’s account closure.
            </p>

          </div>
          <div className="textBlock">
            <h2>3. Availability Of Games
            </h2>
            <p>
              3.1 Please bear in mind that some games may be unavailable in certain jurisdictions, as required by the
              policies of game providers which may change from time to time.
            </p>
            <p>
              3.2 Using VPN to bypass provider’s block is strictly prohibited and may lead to confiscation of winnings.
            </p>
          </div>
          <div className="textBlock">
            <h2>5. Accepted Currencies
            </h2>
            <p>
              The website allows playing for the following currencies: BTC, BCH, LTC, DOGE, ETH, XPR, USDT (ERC20)
            </p>
          </div>
          <div className="textBlock">
            <h2>6. Fees And Taxes</h2>
            <p>
              You are fully responsible for paying all fees and taxes applied to your winnings according to the laws of
              the jurisdiction of your residence.

            </p>
          </div>
          <div className="textBlock">
            <h2>7. Game Rules
            </h2>
            <p>
              By accepting these Terms and Conditions you confirm that you know and understand the rules of the games
              offered on the Website. It is at your discretion to familiarize yourself with the theoretical payout
              percentage of each game.
            </p>
          </div>
          <div className="textBlock">
            <h2>
              8. Disclaimer Of Liabilities
            </h2>
            <p>
              8.1 By accepting these Terms and Conditions you confirm your awareness of the fact that gambling may lead
              to losing money. The Casino is not liable for any possible financial damage arising from your use of the
              Website.
            </p>
            <p>
              8.2 The Casino is not liable for any hardware or software defects, unstable or lost Internet connection,
              or any other technical errors that may limit access to the Website or prevent any players from
              uninterrupted play.8.3 The Company is taking effective measures to protect Player’s private data from any
              unauthorized use and is only making it available to parties involved in providing of gambling services
              through the website. Notwithstanding this, the Company is not responsible for how the information is
              further treated by third parties, for example third party software providers or affiliates. Treatment of
              Player’s private data by such parties is subject to Terms and Conditions of these parties, if any.
            </p>
            <p>
              8.4 In the unlikely case where a wager is confirmed or a payment is performed by us in error, the Company
              reserves the right to cancel all wagers accepted containing such an error, or to correct the mistake by
              re-settling all the wagers at the correct terms that should have been available at the time that the wager
              was placed in the absence of the error.
            </p>
            <p>
              8.5 If the Casino mistakenly credit your Player Account with a deposit, bonus or winnings that do not
              belong to you, whether due to a technical issue, error in the pay tables, human error or otherwise, the
              amount and/or the winnings from such bonus or deposit will remain the Casino property and will be deducted
              from your Player Account. If you have withdrawn funds that do not belong to you prior to us becoming aware
              of the error, the mistakenly paid amount will (without prejudice to other remedies and actions that may be
              available at law) constitute a debt owed by you to us. In the event of an incorrect crediting, you are
              obliged to notify us immediately by email.
            </p>
            <p>
              8.6 The Casino, its directors, employees, partners, service providers:
            </p>
            <span>do not warrant that the software or the Website is/are fit for their purpose;</span>
            <span>do not warrant that the software and Website are free from errors;</span>
            <span>do not warrant that the Website and/or games will be accessible without interruptions;</span>
            <span>shall not be liable for any loss, costs, expenses or damages, whether direct, indirect, special, consequential,
              incidental or otherwise, arising in relation to your use of the Website or your participation in the games.</span>
            <p>
              8.7 The player hereby agree to fully indemnify and hold harmless the Casino, its directors, employees,
              partners, and service providers for any cost, expense, loss, damages, claims and liabilities howsoever
              caused that may arise in relation to your use of the Website or participation in the Games.
            </p>
            <p>
              8.8 You acknowledge that the Casino shall be the final decision-maker of whether you have violated the
              Casino’s Terms and Conditions in a manner that results in your suspension or permanent barring from
              participation in the Website.
            </p>
          </div>
          <div className="textBlock">
            <h2>9. Use Of Player Account</h2>
            <p>
              9.1 Each player is allowed to create only one (1) personal account per residence address, household, IP
              address or PC. Creating multiple Player Accounts by a single player can lead, at the sole discretion of
              the Casino, to termination of all such accounts and cancellation of all payouts to the player. The player
              shall not provide access to their Player Account or allow using the Website to any third party including
              but not limited to minors.
            </p>
            <p>
              9.2 Any returns, winnings or bonuses that the Player received or accumulated during the time when the
              Duplicate Account was active the account will be forfeited and may be reclaimed by the Casino. The Player
              will return to the Casino on demand any funds which have been withdrawn from the Duplicate Account.
            </p>
            <p>
              9.3 The website can be used solely for personal purposes and shall not be used for any type of commercial
              profit.
            </p>
            <p>
              9.4 You must maintain your account and keep your details up-to-date.
            </p>
            <p>
              9.5 We reserve the right to make a phone call to the number provided in your Player Account, which at our
              own discretion can be a necessary part of the KYC procedure. Until the account is fully verified, no cash
              outs will be processed. In case the provided phone number is incorrect, missing or false or the Player
              will not answer the phone call, we reserve the right to confiscate your winnings and/or disable your
              Player Account. We will make reasonable efforts trying to contact you regarding the withdrawal of the
              funds, but if we are not able to reach you (by email or phone) in two (2) weeks as from the date of the
              request for withdrawal, your account will be locked due to your failure to pass the KYC procedure.
            </p>
          </div>
          <div className="textBlock">
            <h2>10. Anti-Fraud Policy</h2>
            <p>
              10.1 The Company has a strict anti-fraud policy. If the Player is suspected of fraudulent actions
              including but not limited to:
            </p>
            <span>participating in any type of collusion with other Players;</span>
            <span>development and use of strategies aimed at unfaithful winnings;</span>
            <span>fraudulent actions against other online casinos or payment providers;</span>
            <span>charge back transactions with a credit card or denial of some payments made;</span>
            <span>other types of cheating;</span>
            <span>provision of forged documents;</span>
            <span>creating two or more accounts;</span>
            <span>or is known to have gone bankrupt in the country of their residence, the Company reserves the right
              to terminate such a Player Account and suspend and/or cancel all payouts to the player. This decision is
              at the sole discretion of the Company and the Player will not be notified or informed about the reasons
              for such actions. The Company also reserves the right and may be obliged to inform applicable regulatory
              bodies of the fraudulent actions performed by the player.</span>
            <p>
              The Casino has zero tolerance to advantage play. Any Player who will try to gain advantage of the Casino
              welcome offers or other promotions agrees that Company reserves the right to void bonuses and any winnings
              from such bonuses, for the reasons of:
            </p>
            <span>use of stolen cards;</span>
            <span>chargebacks;</span>
            <span>creating more than one account in order to get advantage from the Casino promotions;</span>
            <span>provision incorrect registration data;</span>
            <span>provision of forged documents;</span>
            <span>any other actions which may damage the Casino;</span>
            <span>low risk roulette play where the Player betting equal stakes for both black/red or even/odd covering
              25 or more out of 37 numbers on the table. (Placing bets on black/red only covers 36 of 37 possible numbers).</span>
            <p>
              10.2 The Casino reserves the right to close the Player’s Account and to refund to the Player the Account
              balance, subject to the deduction of relevant withdrawal charges, at Casino’s absolute discretion and
              without any obligation to state a reason or give prior notice.
            </p>
            <p>
              10.3 The Casino reserves the right to retain payments, if suspicion or evidence exists of manipulation of
              the Casino system. Criminal charges will be brought against any user or any other person(s), who has/have
              manipulated the Casino system or attempted to do so. The Casino reserves the right to terminate and/or
              change any games or events being offered on the Website.
            </p>
            <p>
              10.4 Should the user become aware of possible errors or incompleteness in the software, they agree to
              refrain from taking advantage of them. Moreover, the user agrees to report any error or incompleteness
              immediately to the Casino. Should the user fail to fulfil the obligations stated in this clause, the
              Casino has a right to full compensation for all costs related to the error or incompleteness, including
              any costs incurred in association with the respective error/incompleteness and the failed notification by
              the user.
            </p>
            <p>
              10.5 To prevent any fraudulent activities concerning cryptocurrency transactions, we lay down the
              following rule: in case the transaction is marked as replaceable - Opt-in Replace-by-Fee (RBF), the Casino
              reserves the right to close such accounts immediately and withhold any wins.
            </p>
            <p>
              10.6 If a Player requested a withdrawal of the funds, but the sum of made bets since the last deposit is
              less than 3x (three) times the size of that deposit, the Casino reserves the right to charge the Player
              the costs of transaction processing, including deposits and withdrawals. This decision is at the sole
              discretion of the Casino management.
            </p>
            <p>
              10.7 In order to verify Player's account the Casino management requires documents (ID, payment systems,
              utility bills еtc) in Latin or Cyrillic alphabet. In case Player doesn’t have an opportunity to provide
              documents in above-mentioned alphabets the Casino reserves the right to demand video verification where
              Player shows their documents.
            </p>
          </div>
          <div className="textBlock">
            <h2>11. Depositing</h2>
            <p>
              11.1 The Website offers Coinspaid as payment method only.
            </p>
            <p>
              11.2 RocketBet.com casino does not accept third party payments. You must make deposits only from a
              supported wallet for your currency of choice which rightfully belongs to you. If we determine during the
              security checks that you have violated this condition your winnings will be confiscated and the original
              deposit returned to the owner of the payment account. The casino is not responsible for the lost funds
              deposited from third party accounts.
            </p>
            <p>
              11.3 Please note that the minimal amount of deposit is: 0.0001 BTC / 0.001 BCH/ 0.01 LTC/ 1 DOGE/ 0.01
              ETH/ 0.001 XPR/ 0.01 USDT (ERC20) Please do NOT attempt to deposit below the mentioned amounts, as the
              funds will not reach your player account and will become permanently lost.
            </p>
            <p>
              11.4 Kindly note that due to the nature of cryptocurrencies, deposit limits cannot be applied to the
              deposits made through CoinsPaid payment system. If you want to limit your gambling in the casino, please,
              use any other available option.
            </p>
            <p>
              11.5 Contact our support team at support@RocketBet.com if you have any questions
            </p>
          </div>
          <div className="textBlock">
            <h2>12. Withdrawal Policy</h2>
            <p>
              12.1 The Website supports payouts via CoinsPaid only.
            </p>
            <p>
              12.2 Withdrawals will be made to your stated wallet address. To withdraw any funds which have been
              deposited, we require the blockchain to give at a minimum 4 confirmations of your deposit before a
              withdrawal can be made. If you deposit with a small mining fee, the confirmations will take up to a couple
              of hours.
            </p>
            <p>
              12.3 All cash outs requested to a wallet address that was unused in our system before will require
              confirmation via email before being processed. If you did not receive an email notification, please
              contact our live support team. Any cashouts without a confirmed wallet address will be returned to the
              player's account.
            </p>
            <p>
              12.4 All transactions shall be checked in order to prevent money laundering. If the Member becomes aware
              of any suspicious activity relating to any of the Games of the Website, he must report this to the Company
              immediately. RocketBet Casino may suspend, block or close a Member Account and withhold funds if requested
              to do so in accordance with the Prevention of Money Laundering Act. Enhanced due diligence may be done in
              respect of withdrawals of funds not used for wagering. A standard 3x wagering requirement applies to
              deposits before they become cashable while playing slot games. A standard 10x wagering requirement applies
              to deposits before they become cashable while playing table games and any other games.
            </p>
            <p>
              12.5 If we mistakenly credit your Player Account with winnings that do not belong to you, whether due to a
              technical error in the pay-tables, human error, or otherwise, the amount will remain property of us and
              the amount will be deducted from your Player Account. If you have withdrawn funds that do not belong to
              you prior to us becoming aware of the error, the mistakenly paid amount will (without prejudice to other
              remedies and actions that may be available at law) constitute a debt owed by you to us. In the event of an
              incorrect crediting, you are obliged to notify us immediately by email.
            </p>
            <p>
              12.6 The casino reserves the right to carry out additional verification procedures for any payout
              exceeding the equivalent of 1 Bitcoin, and further reserves the right to carry out such verification
              procedures in case of lower payouts. Players who wish to recover funds held in a closed, locked or
              excluded account, are advised to contact Customer Support
            </p>
            <p>
              12.7 The minimal amount for withdrawal is: 0.0001 BTC / 0.001 BCH/ 0.01 LTC/ 1 DOGE/ 0.01 ETH/ 0.001 XPR/
              0.01 USDT (ERC20)
            </p>
            <p>
              12.8 Withdrawal Limits: 12 000 USDT or 0,6 BTC or equivalent to any available crypto currency per week and
              60 000 USDT or 3 BTC or equivalent to any available crypto currency per month.
            </p>
            <p>
              For members of RocketBet.com VIP club withdrawal limits are:
            </p>
            <span>
              For the Platinum and Diamond: 30 000 USDT or 1,5 BTC or equivalent to any available crypto currency per
              week and 90 000 USDT or 4,5 BTC or equivalent to any available crypto currency per month;
            </span>
            <span>
              For the Black Diamond level: 60 000 USDT or 3 BTC or equivalent to any available crypto currency per week and 120 000 USDT or 6 BTC or equivalent to any available crypto currency per month;
            </span>
            <span>
              For the Infinity level: no weekly or monthly limits applied.
            </span>
            <span>
              12.9 The Casino reserves the right to check your identity prior to processing payouts and to hold any refund or withdrawals for the time needed to check your identity. In case you provide false or incomplete Personal Data, the withdrawal can be refused and the Player Account terminated, of which you will be informed by email.
            </span>
            <p>
              12.9.1 The Website supports payouts via CoinsPaid only.
            </p>
            <p>
              12.9.2 Please keep in mind the Casino is not a financial institution. Your account will thus not bear any
              interests and no conversion or exchange services will be offered at any time.
            </p>
          </div>
          <div className="textBlock">
            <h2>13. Refund Policy</h2>
            <p>
              13.1 A refund request will only be considered if it is requested within the first twenty-four (24) hours
              of the alleged transaction, or within thirty (30) calendar days if a Player alleges that another
              individual has accessed his/her Player Account.
            </p>
            <p>
              13.2 Before a refund is processed all bonuses and winnings in your balance will be deducted prior to
              calculating the amount to be refunded.
            </p>
            <p>
              13.3 All costs that may occur upon refund procedure are on the player.
            </p>
          </div>
          <div className="textBlock">
            <h2>14. In-Game Conversion Feature</h2>
            <p>
              14.1 Some of the games have a feature to convert crypto to fiat currencies.
            </p>
            <p>
              14.2 This feature is purely cosmetic, allowing for an impression of playing in fiat currencies. At the
              time of the conversion no real crypto to fiat exchange is made.
            </p>
            <p>
              14.3 The exchange rates are retrieved from Coinmarketcap and updated approximately every 10 minutes.
            </p>
            <p>
              14.4 The Casino is not a financial institution and should not be treated as such. No real crypto to fiat
              or fiat to crypto exchange or any other exchange of any kind will be offered at any time.
            </p>

          </div>
          <div className="textBlock">
            <h2>15. Dormant Accounts</h2>
            <p>
              15.1 An inactive (dormant) account is a Player Account which a player has not logged into or logged out of
              for twelve (12) consecutive months. If your Player Account is deemed to be inactive, the Casino reserves
              the right to charge a monthly administrative fee of €10 in the equivalent in any acceptable currency (or
              the current balance of your account, if less) as long as the balance of your account remains positive.
            </p>
            <p>
              15.2 You authorize the Casino to debit this fee from your Player Account at the beginning of the month
              following the day on which your account is deemed inactive, and at the beginning of every subsequent month
              that your account remains inactive. The Casino will stop deducting the fee if the account balance is zero
              or if the account is re-activated.
            </p>
          </div>
          <div className="textBlock">
            <h2>16. Expiry Period</h2>
            <p>
              16.1 You agree that any claim and/or cause of action arising out of or related to these Terms and
              Conditions or a service provided by the Casino must be filed within one (1) year after such claim or cause
              of action arose.
            </p>
          </div>
          <div className="textBlock">
            <h2>17. Complaints</h2>
            <p>
              17.1 You are free to contact our customer service team according to the instructions found on the Website
              to give us any complaints regarding our services.
            </p>
            <p>
              17.2 Complaints are handled in the support department and escalated in the organization of the Casino in
              the case that support personnel did not solve the case immediately. You shall be informed about the state
              of the complaint to a reasonable level.
            </p>
            <p>
              17.3 Casino is to acknowledge a complaint started by the account holder only. It is forbidden to and you
              can therefore not assign, transfer, hand over or sell your complaint to the third party.
            </p>
            <p>
              17.4 Casino will dismiss the complaint if the matter is handed over to be conducted by the third party and
              not the original account owner.
            </p>
            <p>
              17.5 In the event of any dispute, you agree that the server logs and records shall act as the final
              authority in determining the outcome of any claim. You agree that in the unlikely event of a disagreement
              between the result that appears on your screen and the game server, the result that was logged on the game
              server will prevail, and you acknowledge and agree that our records will be the final authority in
              determining the terms and circumstances of your participation in the relevant online gaming activity and
              the results of this participation.
            </p>
            <p>
              17.6 When we wish to contact you regarding such a dispute, we will do so by using any of the contact
              details provided in your Player Account.
            </p>
          </div>
        </div>
      </div>  </div>
    </main>
  );
};

export default TermsPage;
import React, {useEffect} from 'react';

const ResponsiblePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const responsibleListSm = ['Privacy Policy', 'Effective from: 9.1.22\n', 'Last updated: 9.1.22\n']
  return (
    <main className="main main--responsible">
      <div className="container">


      <div className="rules">
        <h1 className="title">Responsible gambling</h1>
        <ul className="rules__descr">
          {responsibleListSm.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
        <div className="rules__content">
          <div className="textBlock">
            <h2>General Terms</h2>
            <p>
              Gambling at an online casino is mostly done for entertainment purposes. However, there is a certain
              percentage of people who lose control over themselves while gambling. Before starting to play, it is
              important to realize that gaming shall not be viewed as a source of income or means of recovery from
              debts. It is useful to keep track of the time and the amount of money spent at an online casino daily.
            </p>
            <p>
              Besides, as a player, you have the opportunity to put a loss limit on your account (among other limits
              such as “Deposit”, “Cooling Off”, “Wager”, and “Self-Exclusion” that can be applied in “Responsible
              Gambling” tab of your Personal Profile). To clarify the functionality of this limit, the loss is based on
              the deposit made by the player and not winnings attributed to the deposited amount. If a player for
              example deposits €50, has a loss limit of €10 and the player goes on and wins €1,000, the player can still
              lose more than €10 of the €1,000 balance as it's based on the initial deposit instead of the winnings.
            </p>
            <p>
              Assistance for Problem Gaming
            </p>
            <p>
              If you think that you start spending more money than you can afford, or in case gaming starts interfering
              with your normal daily routines, we strongly advise to consider several measures that can help, such as
              setting Personal Limits on your gaming activities, opting for Self-Exclusion, and seeking help and support
              from trusted independent bodies.
            </p>
            <p>
              Personal limits
            </p>
            <p>
              Limits can be amended at any time. A decrease in the limit will take effect immediately, however an
              increase may only occur after email confirmation and only after the previous limit of the same type
              expires, in order to avoid rash decisions. If you require further information or assistance regarding
              Personal Limits functionality, please contact support.
            </p>
            <span>Deposit Limit. You can set a limit on your deposits for a day, a week, or a month.</span>
            <span>Loss Limit. You can set a limit on your losses in the casino for a day, a week, or a month.</span>
            <span>Wager Limit. You can set a limit on the wagered amount for a day, a week, or a month.</span>
            <span>Cooling-Off Limit. You can set your Cooling-Off Limit for 1 day, 3 days, 1 week, 1 month, 3 months, or 6 months. While the limit is active you cannot deposit to the casino and you will be excluded from all promotional offers for the set period, although you may withdraw remaining funds during this period. Cooling-Off period is applied to your account immediately. Upon its expiring your account will automatically be re-activated.
</span>
            <span>
              Self-Exclusion Limit. You can set your Self-Exclusion Limit for 6 months, 9 months, or 1 year, or forever. Upon doing so your user account will immediately be disabled and you will be excluded from all promotional offers for the set period. You will not be able to deposit or withdraw funds.
            </span>
            <p>
              Self-exclusion by request
            </p>
            <p>
              You may also contact our Support Team at support@RocketBet.com and inform us about your decision to stop
              gambling at the website for a certain period of time. We will take all measures to block your access to
              your user account and make sure that you receive no promotional materials.
            </p>
            <p>
              Please note that if you are self excluded from the casino for indefinite period of time, the funds
              remaining on balance will be paid according to the casino limits. If you are self excluded for a definite
              period of time, the funds remaining on balance will be paid according to the casino limits only when a
              period of self exclusion expires.
            </p>
            <p>
              External help
            </p>
            <p>
              You may contact any of the following organizations for consultation and support:
            </p>
            <span>Gambling Anonymous</span>
            <span>GamCare</span>
            <span>Gambling Therapy</span>
            <p>
              Protection Of Minors
            </p>
            <p>
              RocketBet is only accepting players who are at least 18 years old and uses all available methods to stop
              any attempts of minors to register and play at our casino. The casino reserves the right to ask for proof
              of identity and in case the player has not reached the legal age to play, access to the website will be
              denied. However, we realize that due to a wide availability of Internet people under age still have a
              chance to register and play at an online casino. We therefore strongly encourage parents to cooperate in
              protecting their children from free access to gaming websites. There is special software that can help in
              this matter. Please visit the following websites for more information.
            </p>
            <span>
            <a href="http://www.cyberpatrol.com">http://www.cyberpatrol.com</a>
            </span>
            <span>
            <a href="http://www.gamblock.com">http://www.gamblock.com</a>
            </span>
            <span>
            <a href="http://www.solidoak.com">http://www.solidoak.com</a>
            </span>
            <span>
            <a href="http://www.netnanny.com">http://www.netnanny.com</a>
            </span>
          </div>
        </div>
      </div>    </div>
    </main>
  );
};

export default ResponsiblePage;
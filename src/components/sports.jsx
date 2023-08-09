import React, { useState, useRef } from "react";
import "./sports.css";
import Nav from "./nav";
import photosData from "./sportsdata";

const Sports = () => {
  const [activeSection, setActiveSection] = useState(null);

  const footballRef = useRef(null);
  const cricketRef = useRef(null);
  const formulaRef = useRef(null);
  const otherRef = useRef(null);

  const handleFootballClick = () => {
    setActiveSection("football");
  };

  const handleCricketClick = () => {
    setActiveSection("cricket");
  };

  const handleFormulaClick = () => {
    setActiveSection("formula");
  };

  const handleOtherClick = () => {
    setActiveSection("other");
  };

  return (
    <div>
      <Nav />
      <div className="container-sports">
      <div className="container-sports1">
        <div className="left-side">
          <div className="btns">
            <button className="btn-sports" onClick={handleFootballClick}>
              FOOTBALL
            </button>
          </div>
          <div className="btns">
            <button className="btn-sports" onClick={handleCricketClick}>
              CRICKET
            </button>
          </div>
          <div className="btns">
            <button className="btn-sports" onClick={handleFormulaClick}>
              FORMULA
            </button>
          </div>
          <div className="btns">
            <button className="btn-sports" onClick={handleOtherClick}>
              OTHER
            </button>
          </div>
        </div>
        </div>
        <div className="container-sports2">
        <div className="right-side">
          {activeSection === "football" && (
            <div ref={footballRef}>
              <h2>FootBall Section</h2>
              <div className="news1">
                <h3>
                  Uncertainty Surrounds Harry Kane's Future as Top Clubs Circle
                </h3>
                <img
                  src="https://3.bp.blogspot.com/-NHoMPXSJf2s/XncWccZRtTI/AAAAAAAAT70/DCubSE27CQUR0NxoCn4nNdO33-NJfILKgCLcBGAsYHQ/s6400/Harry%252BKane%252BTottenham%252BHotspur%252BLiverpool.jpg"
                  alt=""
                />
                <p>
                  Harry Kane's future at Tottenham Hotspur remains uncertain as
                  he returns to preseason training amidst links to Bayern
                  Munich. New Spurs manager, Ange Postecoglou, expressed his
                  desire to have Kane involved in the club's success but did not
                  receive any assurances about the striker's future. Postecoglou
                  plans to hold a meeting with Kane to discuss their vision for
                  the club. Tottenham is eager to secure Kane to a new long-term
                  contract, but Bayern's reported bids may test their resolve.
                  Manchester United, Real Madrid, and Paris Saint-Germain are
                  also potential destinations for a top-class forward this
                  summer. Tottenham chairman Daniel Levy prefers selling abroad
                  rather than to another English team. While United and Ten
                  Hag's Ajax have shown interest, Madrid is likely to be leading
                  the chase for Kylian Mbappe. Despite Kane's contract
                  situation, Bayern's bid of £68.5 million is considered low,
                  and losing him for nothing next year is a risk for Tottenham.
                  Levy's negotiating skills will be tested, and Bayern's
                  interest could attract other bidders. The meeting with
                  Postecoglou aims to convince Kane that he can achieve his
                  ambitions of winning silverware at Tottenham, despite recent
                  managerial changes and a lack of Champions League{" "}
                </p>
              </div>

              <div className="news2">
                <h3>
                  Italian Legend Criticizes Mbappe's "Indecent" Contract Stance
                  at PSG
                </h3>
                <img
                  src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1c659f9c98216d68/64a8f928da7de364609c6a52/20230708_Mbappe.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                  alt=""
                />

                <p>
                  Italian football legend Paolo Di Canio has criticized Kylian
                  Mbappe's handling of his contract situation at Paris
                  Saint-Germain (PSG). Mbappe's decision not to trigger a
                  contract extension has drawn disapproval from fans and former
                  players, with Di Canio joining the chorus of critics. The
                  French striker sent a letter to PSG stating that he would not
                  extend his contract, potentially leaving as a free agent after
                  the 2023-24 season, with Real Madrid as his likely
                  destination. Di Canio accused Mbappe of taking advantage of
                  PSG's support and global brand, calling it "indecency." He
                  argued that Mbappe had already benefited from the club's
                  backing and now seemed intent on leaving PSG to secure a
                  lucrative deal with Real Madrid. In response, Mbappe clarified
                  that his objective was to continue with PSG, emphasizing that
                  staying at the club remained his priority. He stated that the
                  letter was sent before meeting up with the French national
                  team and had not intended to cause harm or offense. The
                  criticism towards Mbappe's decision has sparked debates among
                  fans and pundits, with some viewing it as a desire for a new
                  challenge and change of scenery, while others condemn the
                  player for his approach. As the situation unfolds, the
                  football world eagerly awaits further developments, closely
                  monitoring Mbappe's future and the potential implications for
                  PSG and Real Madrid.
                </p>
              </div>
            </div>
          )}

          {activeSection === "cricket" && (
            <div ref={cricketRef}>
              <h2>Cricket Section</h2>
              <div className="news1">
                <h3>
                  Yuvraj Singh Expresses Doubts About India's Middle Order for
                  ICC World Cup 2023
                </h3>

                <img
                  src="https://images.news18.com/ibnlive/uploads/2021/01/1611058905_yuvraj-singh.jpg?impolicy=website&width=418&height=278"
                  alt=""
                />

                <p>
                  Yuvraj Singh, a prominent former cricketer and two-time World
                  Cup winner, has raised doubts about India's ability to secure
                  victory in the upcoming ODI World Cup. Speaking on the YouTube
                  Channel 'Cricket Basu,' Yuvraj highlighted the key issue of
                  India's middle order and expressed frustration at their recent
                  inability to win a World Cup. The middle-order woes were a
                  major cause for concern, according to Yuvraj, who also cited
                  injuries as a contributing factor. He stressed the need for a
                  batsman in the number four position who can handle pressure
                  and absorb it rather than focusing solely on flamboyant
                  run-scoring. Yuvraj suggested that if Rishabh Pant performs
                  well as the fourth-position batsman for his IPL franchise, he
                  should occupy the same role in the national squad. To increase
                  their chances of success in the World Cup, Yuvraj emphasized
                  the importance of getting the team combination right, an issue
                  that has plagued India in ICC events. He praised Rohit Sharma
                  as a sensible captain and emphasized the need to find the
                  optimal squad combination. Yuvraj also recommended playing a
                  few preparatory matches to achieve the desired balance and
                  proposed having a pool of at least 20 players to choose the
                  final squad of 15.
                </p>
              </div>

              <div className="news2">
                <h3>
                  Ravichandran Ashwin is building up a great CV with some of the
                  brightest achievements in every department
                </h3>
                <img
                  src="https://img1.rapidleaks.com/2016/12/ravichandran-ashwin-test-hundred.jpg"
                  alt=""
                />
                <p>
                  Ravichandran Ashwin achieved a remarkable feat in the first
                  Test between India and the West Indies at Windsor Park in
                  Dominica. After losing the toss and being asked to field,
                  India's pacers put up an impressive display, but it was Ashwin
                  who made the breakthrough. Ashwin, who missed the World Test
                  Championship final against Australia, came back strongly and
                  dismissed Tagenarine Chanderpaul, becoming the first Indian
                  bowler to dismiss a father-son duo. In his third over, Ashwin
                  bowled a delivery that castled Chanderpaul, taking just 12
                  attempts to do so. This brought back memories of Ashwin's
                  debut in Delhi 12 years ago, where he impressed by claiming
                  the wicket of the senior Chanderpaul, Shivnarine, and was
                  awarded the player of the match in his first Test. Ashwin also
                  surpassed Anil Kumble as the Indian bowler with the most
                  bowled dismissals in Test cricket. With his 95th scalp, he
                  overtook Kumble's record of 94. Following Ashwin on the list
                  are Kapil Dev with 88 and Mohammed Shami with 66 bowled
                  dismissals. Ashwin continued his success by removing Windies
                  captain Kraigg Brathwaite, who attempted a slog but ended up
                  giving a catch to India's captain, Rohit Sharma. Overall,
                  Ashwin's performance was exceptional, showcasing his talent as
                  a spin bowler. His ability to deceive batsmen with his flight
                  and spin remained intact, and he made a significant impact on
                  the game.
                </p>
              </div>
            </div>
          )}

          {activeSection === "formula" && (
            <div ref={formulaRef}>
              <h2>Formula Section</h2>
              <div className="news1">
                <h3>
                  Horner Praises 's Impressive Testing and AlphaTauri Loan
                </h3>
                <img
                  src="https://media4.speedcafe.com/wp-content/uploads/2016/03/Ricciardo-Ferrari-.jpg"
                  alt=""
                />
                <p>
                  Red Bull Team Principal Christian Horner lauded Daniel
                  Ricciardo's superb performance during a recent Silverstone
                  Pirelli test, where he stood in for Red Bull Racing before
                  unexpectedly joining AlphaTauri later in the day. Ricciardo,
                  originally scheduled for the Pirelli test as part of his third
                  driver duties, delivered lap times that would have placed him
                  on the front row of the grid at the British Grand Prix.
                  AlphaTauri subsequently confirmed that Ricciardo would replace
                  Nyck de Vries from the Hungarian Grand Prix onwards, with
                  Horner expressing confidence in Ricciardo's speed despite his
                  time away from racing. Horner stated, "Daniel hasn't lost any
                  form during his break, and his progress in sim sessions
                  translates on track. His times during the tire test were
                  highly competitive. We are excited to see what the rest of the
                  season brings for Daniel on loan at Scuderia AlphaTauri."
                  Ricciardo's return to AlphaTauri, where he previously raced
                  under their Toro Rosso identity from 2012-13, will reunite him
                  with Team Principal Franz Tost. Tost anticipated that the team
                  would benefit from Ricciardo's experience and thanked Nyck de
                  Vries for his contributions during his brief tenure. "I'm
                  pleased to welcome Daniel back to the team," said Tost. "His
                  driving skills are unquestionable, and his integration will be
                  seamless. The team will profit from his experience as an
                  eight-time Formula 1 Grand Prix winner. I thank Nyck for his
                  valuable contribution and wish him the best for the future."
                </p>
              </div>

              <div className="news2">
                <h3>
                  Unveiling Red Bull's Racing Legacy: 's Journey as the First F1
                  Prodigy
                </h3>
                <img
                  src="https://img.speedweek.com/i/b/bedc514c86934a6d8b0a3e19c52f1fd3.jpg?preset=i750"
                  alt=""
                />
                <p>
                  Step into the past with Christian Klien, the inaugural talent
                  to emerge from Red Bull Racing's junior program, as he takes
                  us on a nostalgic ride through the team's humble beginnings in
                  2005. In this edition of Beyond The Grid, presented by
                  GetYourGuide, Klien sheds light on his Formula 1 career and
                  the reasons behind his departure from the sport in 2010, while
                  contemplating what might have been had he raced the
                  lightning-fast cars of today. Amidst Red Bull Racing's current
                  dominance and their status as multiple world champions, it's
                  easy to overlook the significance of Klien's role as the
                  team's maiden graduate. With stars like Max Verstappen,
                  Sebastian Vettel, Alex Albon, and Pierre Gasly gracing the Red
                  Bull roster in later years, Klien's tenure was relatively
                  brief, leading him to assume test driver duties after just
                  three seasons on the grid. Nonetheless, Klien believes that
                  given the opportunity to drive the speedier machines of today,
                  his true potential would have shone through. Engaging in a
                  candid conversation with Tom Clarkson, Klien reminisces about
                  his F1 venture and delves into the factors that contributed to
                  his departure from the sport. He also shares his experiences
                  alongside former teammates Mark Webber and David Coulthard,
                  providing insights into Red Bull's reputation as a team that
                  knows how to celebrate. Moreover, Klien shares his thoughts on
                  the highly anticipated 2023 season, offering his perspective
                  on the challenges and prospects that lie ahead. LeBron James
                  Commits to His 21st NBA
                </p>
              </div>
            </div>
          )}

          {activeSection === "other" && (
            <div ref={otherRef}>
              <h2>Trending Section</h2>

              <div className="news1">
                <h3>
                  LeBron James Commits to His 21st NBA Season, Determined to
                  Leave a Lasting Legacy
                </h3>
                <img
                  src="https://www.hdwallpaper.nu/wp-content/uploads/2018/03/lebron_james-12-995x498.jpg"
                  alt=""
                />
                <p>
                  In a statement at the ESPYS, LeBron James confirmed his
                  decision to continue playing in the NBA, marking his 21st
                  season in the league. Despite considering retirement after the
                  Lakers' playoff loss to the Denver Nuggets, James expressed
                  his commitment to joining the elite group of players who have
                  competed for more than two decades. He joins the likes of Dirk
                  Nowitzki, Kevin Garnett, Robert Parish, Kevin Willis, and
                  Vince Carter, who holds the record with 22 seasons. During his
                  acceptance speech for the ESPY award for Best Record-Breaking
                  Performance, where he surpassed Kareem Abdul-Jabbar's scoring
                  record, James emphasized his dedication to the sport. He
                  stated that as long as he can compete without compromising the
                  integrity of the game, he will continue to play, disregarding
                  personal achievements or statistics. James also mentioned the
                  influence of his family on his passion for basketball. Joined
                  by his wife, Savannah, and their three children, he expressed
                  gratitude for their support. His sons, Bronny Jr. and Bryce,
                  are pursuing their basketball dreams, with Bronny Jr. set to
                  join the USC basketball team and Bryce continuing his high
                  school career. Highlighting a viral video of his intense
                  coaching style during his son's game, James took pride in
                  bringing his best regardless of the stage or competition
                  level. He reiterated that throughout his career, he has never
                  taken the game for granted and always approached it with
                  respect. Surrounded by former teammates Dwyane Wade, Carmelo
                  Anthony, and Kentavious Caldwell-Pope, James expressed his
                  love for the game and his desire to leave a lasting impact. He
                  acknowledged the importance of his teammates, basketball
                  legends who came before him, and the unwavering support of the
                  fans. In conclusion, LeBron James confirmed his return for his
                  21st NBA season, fueled by his love for basketball, his
                  family's involvement, and the joy he finds in coaching and
                  playing. With his determination and passion, James aims to
                  solidify his status as one of the greatest basketball players
                  of all time.
                </p>
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;

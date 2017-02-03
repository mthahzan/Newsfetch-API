'use strict';

/**
 * The seed data for users table
 * @type {Array}
 */
const users = [{
  name: 'Mohomed Thahsan',
  authName: '0711911644',
  password: 'FmHyauGHmLFDSpDwymoEeMACxsBOQUF0SiGWCm4v45E=',
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  name: 'Mohomed Usaidh',
  authName: '0710987654',
  password: 'FmHyauGHmLFDSpDwymoEeMACxsBOQUF0SiGWCm4v45E=',
  role: 'consumer',
  createdAt: new Date(),
  updatedAt: new Date(),
}];

/**
 * The seed data for post types table
 * @type {Array}
 */
const postTypes = [{
  name: 'General',
  notification: false,
  imageURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/E!_News_current_logo.png',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  name: 'Political',
  notification: false,
  imageURL: 'http://cdn.shopify.com/s/files/1/0214/7974/t/4/assets/logo.png?10359408003813025868',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  name: 'Sports',
  notification: false,
  imageURL: 'https://www.famousfourmedia.com/wp-content/uploads/2014/03/sport_800_logo.png',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  name: 'International',
  notification: false,
  imageURL: 'http://logo-all.ru/uploads/posts/2016-03/0_international_trucks_logo.jpg',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  name: 'Janaza',
  notification: true,
  imageURL: 'http://ufukluker.com/wp-content/uploads/2015/02/047_janaza.png',
  createdAt: new Date(),
  updatedAt: new Date(),
}];

/**
 * The seed data for commercial types
 * @type {Array}
 */
const commercialTypes = [{
  name: 'General',
  imageURL: 'http://adsqan.com/wp-content/uploads/2015/11/ADS-Logo.png',
  createdAt: new Date(),
  updatedAt: new Date(),
}];

const posts = [{
  title: 'US sanctions Iran after missile test',
  content: `The US Treasury Department announced the measures against 13 people and a dozen
  companies on Friday.
  \n\n
  President Donald Trump tweeted earlier: "Iran is playing with fire - they don't appreciate how
  'kind' President Obama was to them. Not me!"
  \n\n
  But Iran has said it will not yield to "useless" American threats from "an inexperienced person".
  \n\n
  John Smith, the Treasury Department's acting sanctions chief, said in a statement: "Iran's
  continued support for terrorism and development of its ballistic missile programme poses a
  threat to the region, to our partners worldwide and to the United States."
  \n\n
  President Obama may have sanctioned Iran for its missile test a year ago as well,
  but President Trump's sanctions come in a very different context and from a very different team.
  \n\n
  This administration is filled with officials whose sole focus is Iran, or even hold a grudge
  against it, like the Defence Secretary James Mattis.
  \n\n
  Mr Obama focused on fostering a tone that wouldn't jeopardise the Islamic Republic's commitment
  to the nuclear deal. He rarely referred to Iran's paramilitary activities in the region.
  \n\n
  But the Treasury Department's mention on Friday of "Iran's malign activity abroad" was a reference
  to Iranian support for Shia militias and involvement in countries such as Syria and Iraq.
  \n\n
  There may be still be echoes of Obama's policies here, but the whole framework of the approach has
  changed and Mr Trump and his team are signalling clearly they want to cut Iran to size.
  \n\n
  Some of the newly sanctioned groups are based in the United Arab Emirates, Lebanon and China,
  and include members of the Islamic Republic's Revolutionary Guards Corps.`,
  imageURL: 'http://ichef-1.bbci.co.uk/news/660/cpsprodpb/B95E/production/_93945474_missile.jpg',
  active: true,
  PostTypeId: 2,
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  title: 'Hamilton\'s Forgotten Caribbean',
  content: `Nevis is less well-known than other Caribbean islands – and Nevisians prefer it that
  way. It’s only a few miles across the water from lively St Kitts. But here, the most cacophonous
  noise you’ll hear is the chirping of insects among the lush vegetation.
  \n\n
  On the waterfront in Charlestown, the island’s laid-back capital, is a two-storey building with
  green window shutters and irregular brickwork. On the other side of a well-kept lawn is a
  brightly painted cafe, where shade and sea breezes offer respite from the energy-sapping heat.
  But what really draws the visitor’s attention is a plaque on the wall declaring that Alexander
  Hamilton, the US founding father who features on the country’s $10 bill, was born on this
  site in 1757.
  \n\n
  Hamilton’s life story has become increasingly well known since it became the subject of the
  phenomenally successful hip-hop musical named after him. After spending his early childhood on
  Nevis, his family moved to St Croix (now part of the US Virgin Islands, but then under Danish
  rule) in 1765, where he effectively became an orphan after his father left the island and
  his mother died.
  \n\n
  He gained work as a clerk, where his talents were recognised, and he received financial support
  from local businessmen to study in America. He enrolled at King’s College in New York City (now
  Columbia University), where he began legal studies, alongside writing political articles
  supporting the fast-developing revolution against British rule. In 1776, without having graduated,
  Hamilton became an artillery commander in the Continental Army that fought the British, and the
  next year, was appointed as aide-de-camp to general George Washington, a role he served in for
  four years. From 1789 to 1795, he served as Secretary of the Treasury in Washington’s cabinet.
  \n\n
  Hamilton favoured strong central government (his enemies accused him of being a monarchist) and a
  modern industrial economy. Among his notable achievements were supporting the ratification of the
  US Constitution in essays known as the Federalist Papers, which are still used as a reference
  point by judges interpreting the constitution. He also established a national banking system. But
  the museum next to Hamilton House, as the building in Charlestown is known, is keen to point out
  smaller feats, even suggesting that he was responsible for the tradition of eating turkey on
  Thanksgiving.`,
  imageURL: 'http://ichef.bbci.co.uk/wwfeatures/wm/live/1600_900/images/live/p0/4r/nr/p04rnr9g.jpg',
  active: true,
  PostTypeId: 1,
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  title: 'Louvre attack: French soldier shoots machete-wielding man',
  content: `A French soldier guarding the Louvre in Paris has shot a man who tried to attack a
  security patrol with a machete shouting "Allahu Akbar", police say.
  \n\n
  The man, who tried to gain entry to the Louvre's shopping centre, was shot in the abdomen
  and seriously injured.
  \n\n
  Reports say he is an Egyptian man, 29, who arrived in France last month. Police have not released
  his identity.
  \n\n
  President Francois Hollande said the situation was under control but the "threat of terrorism is
  here to stay".
  \n\n
  The Louvre, which is home to numerous celebrated art works, including the Mona Lisa, is due to
  reopen on Saturday.
  \n\n
  The incident began at 10:00 local time (09:00 GMT) in the Carrousel du Louvre shopping centre at
  stairs leading to an entrance to the museum itself.
  \n\n
  A patrol of four soldiers are reported to have tried to subdue the assailant using non-lethal
  force after he rushed at them.
  \n\n
  When this failed and after one soldier was injured, five shots were fired. The suspected attacker
  was taken to hospital in a critical condition.
  \n\n
  An image circulating in French media, said to have been taken by a tour guide, shows what is
  believed to be the suspect lying at the foot of the stairs, surrounded by armed soldiers.
  \n\n
  Two rucksacks belonging to the suspect, who shouted "God is greatest" in Arabic, have been
  inspected but no explosives were found.
  \n\n
  There were reports of a second arrest, but the prosecutor's office later told the BBC this was
  not the case.`,
  imageURL: 'http://ichef-1.bbci.co.uk/news/624/cpsprodpb/3C5E/production/_93945451_d19876e4-a49c-42da-a14b-6a586070737e.jpg', // eslint-disable-line
  active: true,
  PostTypeId: 1,
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  title: 'Is Sweden\'s deputy PM trolling Donald Trump in Facebook photo?',
  content: `Sweden's deputy PM is causing a stir after posting an image appearing to parody
  Donald Trump's signing of an anti-abortion executive order.
  \n\n
  Isabella Lovin, who is also the country's climate minister, published a photo that shows her
  signing a new law surrounded by female colleagues.
  \n\n
  The image has drawn comparisons with Mr Trump's photo in which no women were present.
  \n\n
  Within hours the post was shared and liked thousands of times on Facebook.
  \n\n
  "Wonderful Picture! Hope you sent it to the man on the other side of the ocean," writes one user.
  \n\n
  "Make the Planet Great Again!" writes another.
  \n\n
  Facebook user Kimini Delfos said in a post that such an image should not spark the reaction that
  it has, suggesting that people "calm down".
  \n\n
  "Why is it so difficult to see a picture with just women and not difficult to see a picture with
  only men?" she questioned.
  \n\n
  Meanwhile, users of the social media site Twitter have praised what is being described as Ms
  Lovin's "dig" at the US president.
  \n\n
  "Love how the Swedish Deputy PM is taking a dig at Donald Trump in her publicity photo for
  passing climate change law," writes user Ian Sinkins.
  \n\n
  Another, Mikaela Hildebrand, writes: "@IsabellaLovin signs new the Swedish climate law & issues
  funniest #Trumbburn foto! Epic!"
  \n\n
  The comparisons are being made to a photo last month of Mr Trump signing an executive order to
  ban federal money going to international groups which perform or provide information on abortions.
  \n\n
  The image of Mr Trump signing the document surrounded by male colleagues was ridiculed on
  social media.
  \n\n
  On Friday, while signing Sweden's new climate law, Ms Lovin urged European countries to take a
  leading role in tackling climate change as "the US is not there anymore to lead".
  \n\n
  The new law sets long-term goals for greenhouse gas reductions and will be legally binding
  for future administrations.
  \n\n
  Ms Lovin said Sweden wanted to set an example at a time when "climate sceptics [are] really
  gaining power in the world again".
  \n\n
  Mr Trump, who has previously called climate change a hoax, has raised speculation that he might
  pull the US out of the Paris Agreement, which aims to tackle greenhouse gas emissions and limit
  the increase in global temperatures.
  \n\n
  The Swedish government, which claims to be "the first feminist government in the world", has also
  issued a statement affirming that gender equality is "central" to its priorities.
  \n\n
  "Gender equality is also part of the solution to society's challenges and a matter of course in a
  modern welfare state - for justice and economic development," the statement reads.`,
  imageURL: 'http://ichef-1.bbci.co.uk/news/660/cpsprodpb/589B/production/_93938622_sweden.jpg',
  active: true,
  PostTypeId: 4,
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  title: 'Tiger Woods pulls out of Dubai Desert Classic after back spasm',
  content: `Tiger Woods has withdrawn from the Dubai Desert Classic before the second round,
  because of a back problem.
  \n\n
  The 14-time major winner only returned to action in December after 15 months out following two
  back operations.
  \n\n
  Woods, 41, struggled in the first round in Dubai as he shot a five-over 77.
  \n\n
  His agent Mark Steinberg said the American suffered a back spasm on Thursday night but was told
  by Woods that it was not "the nerve pain that's kept him out for so long".
  \n\n
  Steinberg explained: "He feels terrible for the tournament. He wants to be here. He can move
  around. He can't make a full rotation on the swing.
  \n\n
  "The fact he feels it's not the nerve pain is very encouraging for him.
  \n\n
  "He doesn't have the strongest back in the world so it's probably easier to spasm because of the
  issues he's had."
  \n\n
  Woods had won the Dubai tournament twice before, but was 12 shots behind overnight leader Sergio
  Garcia after day one.
  \n\n
  "I wasn't in pain at all. I was just trying to hit shots and I wasn't doing a very good job,"
  Woods said after his opening round.
  \n\n
  Woods' first return to competitive action after his lengthy lay-off came at the Hero World
  Challenge - an 18-man tournament in the Bahamas - in December and he finished 15th at
  the PGA Tour event.
  \n\n
  Afterwards, he expressed concerns over the physical challenge of being scheduled to play four
  full-field tournaments over the next five weeks.
  \n\n
  His next outing came at the PGA Tour's Farmers Insurance Open at Torrey Pines where a first
  round 76 and level-par second round of 72 meant he missed the cut.
  \n\n
  The former world number one's next two tournaments were to be the Genesis Open at Riviera from
  16-19 February and the Honda Classic in Palm Beach Gardens from 23-26 February but his
  participation now appears in doubt.
  \n\n
  Woods, who has won 79 titles on the PGA Tour, has not won a tournament anywhere since 2013,
  while his title drought in the major championships dates back to 2008.
  \n\n
  Meanwhile, play in Dubai was abandoned on Friday because of high winds which blew trees over and
  whipped sand across the course. Round two is scheduled to restart on Saturday morning.
  \n\n
  South Africa's George Coetzee had completed eight holes of his second round as he moved into the
  lead on nine under, while Garcia was one shot behind having completed five holes.`,
  imageURL: 'http://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/DC35/production/_93937365_woods_getty2.jpg', // eslint-disable-line
  active: true,
  PostTypeId: 3,
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  title: 'Saido Berahino: Striker not my problem anymore - West Brom boss Tony Pulis',
  content: `West Brom boss Tony Pulis says he does not "give a damn" about Saido Berahino's
  future because the Stoke City striker is no longer his problem.
  \n\n
  Potters boss Mark Hughes confirmed Berahino, who joined the Potters in January, had served an
  eight-week suspension when he was at West Brom.
  \n\n
  His comments follow newspaper reports Berahino was banned after failing an
  out-of-competition drugs test.
  \n\n
  "Anything Stoke asked for, we told them the truth," Pulis told BBC WM Sport.
  \n\n
  "We never picked him again because his fitness levels, mental levels, were never what we wanted.
  \n\n
  "This club has been absolutely fantastic towards Saido. The way it's protected him, the way it's
  looked after him. He should be really, really grateful."
  \n\n
  The 23-year-old is set to return to the Hawthorns with Stoke in the Premier League on Saturday.
  \n\n
  Asked whether Hughes was the man to help Berahino, Pulis said: "Personally,
  I don't give a damn now.
  \n\n
  "I've spent two and a half years at this club and he's not my problem anymore.
  I wish him all the best."
  \n\n
  Pulis would not comment on the nature of the ban because it was a "personal issue", but he said
  Berahino never returned to the form he produced before West Brom rejected a bid from
  Tottenham for the striker in August 2015.
  \n\n
  "Saido was very good the first six months I was at this club," said the Welshman. "He didn't go
  to Tottenham, and from that point on it's been a real struggle in every way, shape and form."
  \n\n
  BBC Sport contacted Berahino's representative for comment, but has received no reply.
  The FA does not comment on its social drugs policy regulations.`,
  imageURL: null,
  active: true,
  PostTypeId: 3,
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  title: 'Dubai Desert Classic: Players criticise play suspension',
  content: `Players have criticised the European Tour's decision to suspend round two of the Dubai
  Desert Classic in Abu Dhabi.
  \n\n
  Winds reached 36mph and blew trees over at Emirates Golf Club, where play has stopped until
  Saturday, angering some of the 64 players to finish round two.
  \n\n
  Former Masters champion Trevor Immelman called the halt "ridiculous", while Ryder Cup player
  Chris Wood said the decision made the event "one sided".
  \n\n
  Tournament director Mike Stewart said the course was "unsafe and unplayable".
  \n\n
  Stewart added: "We had TV towers that the roofs were blown off. We had balls moving on the
  greens - blew into a bunker at one stage. Five trees came down."
  \n\n
  There are 65 players, including George Coetzee of South Africa, who leads on nine under, and
  Spaniard Sergio Garcia, a shot behind, who have nine holes or more left to play of round two.
  \n\n
  England's Matthew Fitzpatrick (three under par), Danny Willett (one over), Ian Poulter
  (three under) and Northern Ireland's Graeme McDowell (four under), are all yet to reach
  halfway in the second round.
  \n\n
  Stewart still thinks the tournament will conclude on Sunday as round two will be completed on
  Saturday with the third round commencing later in the day from a two-tee start.
  \n\n
  However, a host of early starters on Friday stressed their frustrations as those set to face the
  gusts later in the afternoon were spared.
  \n\n
  Spain's Pablo Larrazabal - who ended five over after two rounds - said he was "very angry".
  \n\n
  South African Immelman, who is set to miss the cut at four over par, wrote on social media:
  "Suspending play now is ridiculous, half the field played 36 holes in these conditions."
  \n\n
  Martin Kaymer of Germany, who is tied for fifth on four under, said: "Hard to understand the
  difference between the morning play and now, therefore even more surprised about the decision."`,
  imageURL: 'http://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/1033C/production/_93946366_epa.jpg',
  active: true,
  PostTypeId: 3,
  UserId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
}];

module.exports = {users, postTypes, commercialTypes, posts};

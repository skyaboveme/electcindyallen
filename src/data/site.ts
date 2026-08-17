export const site = {
  candidate: "Cindy Allen",
  honorific: "Judge Cindy Allen",
  office: "Justice of the Peace, Precinct 1",
  shortOffice: "JP Precinct 1",
  county: "Bastrop County",
  state: "Texas",
  party: "Republican",
  partyAbbr: "R",
  slogan: "Experience on the bench. Fairness in the courtroom.",
  tagline: "Re-elect Judge Cindy Allen — Justice of the Peace, Precinct 1",
  siteName: "Cindy Allen for Justice of the Peace",
  url: "https://cindyallenjp-com.skyabove.workers.dev",
  campaignEmail: "",
  campaignPhone: "",
  donateUrl: "",
  facebookUrl: "",
  formspreeId: "",
  electionDay: "2026-11-03T07:00:00-06:00",
  electionDayLabel: "Tuesday, November 3, 2026",
  registrationDeadline: "Monday, October 5, 2026",
  earlyVotingStart: "Monday, October 19, 2026",
  earlyVotingEnd: "Friday, October 30, 2026",
  mailBallotDeadline: "Friday, October 23, 2026",
  opponent: {
    name: "Tamera Peterson McIntyre",
    party: "Democrat",
    partyAbbr: "D",
  },
  officialCourtUrl: "https://www.bastropcounty.gov/page/jp1",
  countyMapsUrl: "https://www.bastropcounty.gov/page/co.maps",
  voteTexasUrl: "https://www.votetexas.gov/",
  bastropVotesUrl: "https://www.bastropvotes.org/",
  voterLookupUrl: "https://teamrv-mvp.sos.texas.gov/MVP/mvp.do",
  disclaimer:
    "Political advertising paid for by Cindy Allen Campaign. This website is a campaign communication and is not the official website of the Bastrop County Justice of the Peace, Precinct 1.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/the-race", label: "The Race" },
  { href: "/priorities", label: "Priorities" },
  { href: "/vote", label: "Vote" },
  { href: "/news", label: "News" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
] as const;

export const record = [
  {
    year: "2018",
    title: "Elected Justice of the Peace",
    detail:
      "Won a competitive Republican runoff, then defeated Democrat Dock Jackson in November with 56 percent of the vote (4,536–3,561).",
  },
  {
    year: "2019",
    title: "Took the bench",
    detail:
      "Assumed office January 1, 2019, succeeding Judge Donna Thomson and beginning service as Precinct 1’s justice of the peace.",
  },
  {
    year: "2022",
    title: "Re-elected by Precinct 1",
    detail:
      "Won a second term with 58 percent against Democrat Dayna Beck (4,893–3,530).",
  },
  {
    year: "2026",
    title: "Republican nominee",
    detail:
      "Advanced from the March 3 Republican primary and faces Democrat Tamera Peterson McIntyre on the November 3 general-election ballot.",
  },
] as const;

export const experience = [
  {
    title: "Sitting Justice of the Peace",
    meta: "Bastrop County Precinct 1 · since 2019",
    body: "Presides over the court most residents actually use — Class C misdemeanors, civil claims up to $20,000, evictions, magistrate duties, marriages, and inquests.",
  },
  {
    title: "Former municipal judge",
    meta: "Martindale, Caldwell County",
    body: "Came to the 2018 campaign with courtroom experience as a municipal judge — not as a first-day-on-the-job experiment.",
  },
  {
    title: "Juvenile justice, corrections & probation",
    meta: "13 years in the Texas justice system before taking this bench",
    body: "Nine years in juvenile justice, three in juvenile corrections, and one in adult probation — work that teaches judgment, process, and what happens after a case is called.",
  },
  {
    title: "Bastrop small-business owner",
    meta: "Sertinos Coffee, Bastrop",
    body: "A local business owner who already knew Main Street, the square, and the people who walk into a justice court looking for a fair shake and a timely setting.",
  },
] as const;

export const priorities = [
  {
    docket: "01",
    title: "A fair courtroom, not a political stage",
    body: "Justice court is where neighbors resolve disputes, traffic citations are heard, and families face eviction and small-claims cases. The law — not party talking points — belongs on the bench.",
  },
  {
    docket: "02",
    title: "Dockets that respect people’s time",
    body: "Working people, peace officers, and litigants should not lose a day because the court is disorganized. Keep the docket moving, the notices clear, and the process understandable.",
  },
  {
    docket: "03",
    title: "Magistrate work that backs public safety",
    body: "A justice of the peace issues warrants, conducts magistrate duties, and handles inquests. That work requires training, temperament, and respect for both the Constitution and the community’s safety.",
  },
  {
    docket: "04",
    title: "Access for every Precinct 1 resident",
    body: "The official court already serves English speakers during business hours and Spanish speakers on a published weekday schedule. A people’s court should remain approachable without ever pretending clerks can give legal advice.",
  },
  {
    docket: "05",
    title: "Stewardship of a county court",
    body: "JP Precinct 1 is a taxpayer-funded office in the historic courthouse. Run it like it matters — professionally, frugally, and without drama.",
  },
  {
    docket: "06",
    title: "A trained, experienced bench",
    body: "Texas requires justices of the peace to complete substantial judicial education. Precinct 1 is better served by a judge who has already done the work than by a candidate still learning the docket from scratch.",
  },
] as const;

export const jpDuties = [
  {
    title: "Criminal jurisdiction",
    body: "Original jurisdiction in Class C misdemeanors punishable by fine only — the tickets and fine-only offenses most Texans actually see.",
  },
  {
    title: "Civil & justice court",
    body: "Debt claims, repair-and-remedy cases, and evictions where the amount in controversy does not exceed $20,000, including attorney fees.",
  },
  {
    title: "Magistrate & warrants",
    body: "Issue search and arrest warrants, conduct preliminary hearings, and perform the magistrate functions that keep the rest of the justice system moving.",
  },
  {
    title: "Inquests & oaths",
    body: "Conduct inquests in counties without a medical examiner, administer oaths, and perform marriages — duties that call for dignity as much as procedure.",
  },
] as const;

export const volunteerRoles = [
  { id: "yard-sign", label: "Yard sign" },
  { id: "block-walk", label: "Block walk" },
  { id: "phone-bank", label: "Phone bank" },
  { id: "poll-greet", label: "Poll greeter" },
  { id: "host", label: "Host a coffee" },
  { id: "digital", label: "Share online" },
] as const;

export const faqs = [
  {
    q: "Is this the official Justice of the Peace office?",
    a: "No. This is a campaign website for Judge Cindy Allen’s 2026 re-election. Court business — filings, dockets, payments, and case questions — belongs on the Bastrop County JP Precinct 1 page or by calling the court during published hours.",
  },
  {
    q: "When is the election?",
    a: "The general election is Tuesday, November 3, 2026. Early voting by personal appearance runs Monday, October 19 through Friday, October 30. The last day to register is Monday, October 5, 2026.",
  },
  {
    q: "How do I know if I vote in Precinct 1?",
    a: "Justice of the Peace precincts match Bastrop County’s four commissioner/constable precincts. Precinct 1 covers central Bastrop County, including parts of the City of Bastrop. Confirm your JP precinct with the county GIS address lookup — it is not the same number as your election polling precinct.",
  },
  {
    q: "Who is on the other side of the ballot?",
    a: "Democrat Tamera Peterson McIntyre is the Democratic nominee. Judge Allen is the Republican incumbent and the sitting Justice of the Peace for Precinct 1.",
  },
  {
    q: "What does a justice of the peace actually do?",
    a: "A Texas JP is the local trial court for fine-only criminal cases and smaller civil disputes, and a magistrate who can issue warrants, conduct inquests, perform marriages, and keep the first rung of the justice system working.",
  },
] as const;

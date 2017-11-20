import React, { Component } from 'react'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Team')
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_Image from 'A_Image'
import A_P from 'A_P'
import Press from 'O_Press'
import Card from './Card'
import O_File from 'O_File'

class Team extends Component {
  getCards(entities, type) {
    const cards = entities.map((props, i) => <Card {...props} type={type} key={i} />)
    return <ul className={cn('card-list')}>{cards}</ul>
  }

  renderHero = () => (
    <A_Container type="hero" mx={cn('hero')}>
      <A_H type="hero">Lifesci launched in 2016</A_H>
      <A_P type="hero">
        Today’s hyper-connected world deserves a life science partner just as progressive. One that
        adapts to your needs, gives you control and constantly pushes you into new exciting spaces.
      </A_P>
    </A_Container>
  )

  renderFounders = () => (
    <A_Container type="equal" mx={cn('founder-list')}>
      <A_H type="section" mx={cn('founder-title')}>
        Lifesci founders
      </A_H>
      <A_P type="section">
        Dinis and Ajan have been working on the concept and execution of Lifesci for over two years.
        Both of them live and breathe this project on the way of becoming a leading global life
        science platform.
      </A_P>
      {founders.map((obj, i) => this.renderFounder(obj, i))}
    </A_Container>
  )

  renderFounder = ({ photo, name, position, text }, i) => (
    <div className={cn('founder')} key={i}>
      <div className={cn('founder-photo')}>
        <A_Image src={`/img/photo/${photo}`} />
      </div>
      <div className={cn('founder-info')}>
        <A_H type="section-subtitle">{position}</A_H>
        <A_H type="section" mx={cn('founder-name')}>
          {name}
        </A_H>
        <A_P type="article-text">{text}</A_P>
      </div>
    </div>
  )

  renderPressKit = () => (
    <A_Container type="equal">
      <A_H type="section" mx={cn('mx-margin')}>
        Lifesci presskit
      </A_H>
      <A_P type="section" mx={cn('presskit-text')}>
        For any media or other related inquiries please contact us at media@lifesci.io
      </A_P>
      <O_File
        {...{
          name: 'Presskit',
          type: 'zip',
          url: '/zip/presskit.zip',
        }}
      />
    </A_Container>
  )

  render() {
    const teamList = this.getCards(team, 'team')
    const advisorsList = this.getCards(advisors, 'advisors')
    const hero = this.renderHero()
    const founders = this.renderFounders()
    const pressKit = this.renderPressKit()

    return (
      <div className={cn()}>
        {hero}
        {founders}
        <div className={cn('team')}>
          <A_Container type="smart">
            <A_H type="section" mx={cn('mx-margin')}>
              Lifesci team
            </A_H>
            <A_P type="section">
              We’re here for those who refuse to settle. Who never stop moving forwards. Who
              continue to search for new ideas and better experiences in everything they do.
            </A_P>
            {teamList}
          </A_Container>
        </div>

        <A_Container type="smart">
          <A_H type="section" mx={cn('mx-margin')}>
            Lifesci advisory board
          </A_H>
          <A_P type="section">
            Lifesci is backed by some of the world’s most well-known medtech, fintech and crypto
            advisors. They help us to solve life sciences real problems of today.
          </A_P>
          {advisorsList}
        </A_Container>
        <Press />
        {pressKit}
      </div>
    )
  }
}

Team.propTypes = {}

Team.defaultProps = {}

export default Team

const team = [
  {
    name: 'Anton Mozgovoy',
    twitter: '@anton_mozgovoy',
    text: 'Chief Technology Officer',
    avatar: 'anton_mozgovoy.jpg',
  },
  {
    name: 'Jonny Fry',
    twitter: '@twitter',
    text: 'Chief Financial Officer',
    avatar: 'jonny_fry.jpg',
  },
  {
    name: 'Adriana Herrera',
    twitter: '@twitter',
    text: 'Chief Operations Officer',
    avatar: 'adriana_herrera.jpg',
  },
  {
    name: 'Lene Schulze',
    twitter: '@twitter',
    text: 'VP Partnerships',
    avatar: 'lene_schulze.jpg',
  },
  {
    name: 'Allan Griffin',
    twitter: '@twitter',
    text: 'Chief Marketing Officer',
    avatar: 'allan_griffin.jpg',
  },
  { name: 'Anca Petre', twitter: '@twitter', text: 'R&D Expert', avatar: 'anca_petre.jpg' },
  {
    name: 'Zeeshan Malick',
    twitter: '@twitter',
    text: 'Digital Lead',
    avatar: 'zeeshan_malick.jpg',
  },
  { name: 'Derin Cag', twitter: '@twitter', text: 'Digital Expert', avatar: 'derin_cag.jpg' },
  {
    name: 'Sam Merad',
    twitter: '@twitter',
    text: 'Pharma Industry Business Relations',
    avatar: 'sam_merad.jpg',
  },
  {
    name: 'Maria Fonseca',
    twitter: '@twitter',
    text: 'Content Management',
    avatar: 'maria_fonseca.jpg',
  },
  { name: 'Kherel Kechil', twitter: '@GR36', text: 'Frontend Lead', avatar: 'kherel_kechil.jpg' },
  { name: 'Olga Deribo', twitter: '@twitter', text: 'Design Architect', avatar: 'olga_deribo.jpg' },
  { name: 'Kareem Hepburn', twitter: '@twitter', text: 'Team Lead', avatar: 'kareem_hepburn.jpg' },
  {
    name: 'Georgii Oleinikov',
    twitter: '@twitter',
    text: 'Backend Developer',
    avatar: 'georgii_oleinikov.jpg',
  },
  {
    name: 'Aleksandr Adamant',
    twitter: '@twitter',
    text: 'Frontend Developer',
    avatar: 'aleksandr_adamant.jpg',
  },
]

const advisors = [
  {
    name: 'Prof. Sir Martin Evans',
    twitter: 'Chief Scientific Advisor',
    avatar: 'martin_evans.jpg',
    // text:
    //   'Sir Martin John Evans FRS FMedSci. In 2007, shared the Nobel Prize in Physiology or Medicine in recognition of his discovery and contribution to the efforts to develop new treatments for illnesses in humans. In 1978, he moved to the Department of Genetics, at the University of Cambridge, and in 1980 began his collaboration with Matthew Kaufman. Professor Sir Martin Evans is a co-founder of Celixir. In 1981 he isolated the first embryonic stem cells. Over his career, Sir Martin has published more than 120 scientific papers and received numerous awards for his ground-breaking research. Alongside his 2007 Nobel Prize, Sir Martin has also been awarded the prestigious Albert Lasker Award in 2001, the Gold Medal of The Royal Society of Medicine, the Copley Medal of the Royal Society and the Baly Medal of Royal College of Physicians, all in 2009.',
  },
  {
    name: 'Dr. Sabena Sultan',
    twitter: 'Scientific Advisor',
    avatar: 'sabena_sultan.jpg',
    // text:
    //   'Sabena Sultan is the British Heart Foundation Principal Investigator Grant Holder, Cardiovascular Medicine Department, Kings College London, Postdoctoral Scientist at Rayne Institute, Cardiovascular Medicine Department, University of London. She completed PhD in Cardiovascular Medicine, Imperial College School of Medicine. Panagiotis Givissis is currently Associate Professor of Orthopaedics, Aristotle University of Thessaloniki, from 2008 to present Orthopaedic Training Programme in Manchester, UK. She holds Medical Degree, Orthopaedic Surgeon Specialty Degree and PhD Member and He is also the past president of Hellenic Association of Orthopaedic Surgery and Trauma. Dr Sabena Sultan leads Celixir’s R&D efforts across therapy areas for 4 last years. Some of her Latest Research Outputs include: Flow-dependent increase of ICAM-1 on saphenous vein endothelium is sensitive to apamin Sultan, S., Gosling, M., Abu-Hayyeh, S., Carey, N. & Powell, J. T. Jul 2004.',
  },
  {
    name: 'Dr. Armand Keating',
    twitter: 'Scientific Advisor',
    avatar: 'armand_keating.jpg',
    // text:
    //   'Dr. Armand Keating obtained his MD degree from the University of Ottawa, completed internal medicine and hematology training at the University of Toronto and a research fellowship at the University of Washington and the Fred Hutchinson Cancer Research Center in Seattle, Washington. He was a Cancer Research Scientist at the National Cancer Institute of Canada for 10 years upon his return to Toronto. In 1986, he established the University of Toronto Autologous Blood and Marrow Transplant Program and led it to become the largest stem cell transplant program in Canada. For a decade until 2006, he was Chief of Medical Services and Head of the Department of Medical Oncology and Hematology at Princess Margaret Hospital/Ontario Cancer Institute as well as Director of Hematology-Oncology at Mt. Sinai Hospital.',
  },
  {
    name: 'Prof. Stephen Westaby',
    twitter: 'Scientific Advisor',
    avatar: 'stephen_westaby.jpg',
    // text:
    //   "Professor Stephen Westaby FRCS (born 27 July 1948) is a British heart surgeon at John Radcliffe Hospital, Oxford, England. He won the award of Midlander of the Year in 2002.He attended Henderson Avenue Junior School and Scunthorpe Grammar School (High Ridge School from 1968). He went to Charing Cross Hospital Medical School. Westaby and his team performed Peter Houghton's heart operation in June 2000, implanting a Jarvik 7 artificial left ventricular assist device, a turbine pump. Peter Houghton (1938–2007) became the longest living person with an electric heart pump in the world. His memoir of his career as a heart surgeon, Fragile Lives: A Heart Surgeon’s Stories of Life and Death on the Operating Table, was published in 2017 by HarperCollins.",
  },
  {
    name: 'Carolyn Lam Su Ping',
    twitter: 'Scientific Advisor',
    avatar: 'carolyn_lam_su_ping.jpg',
    // text:
    //   'Carolyn is a Senior Consultant of the National Heart Centre, Singapore; Associate Professor, Duke-NUS Cardiovascular Academic Clinical Program, Singapore. Chairperson of the Asia Pacific Association of Women’s Cardiovascular Disease Dr Carolyn Lam graduated from the Faculty of Medicine, National University of Singapore, completed advanced specialty training in Cardiology in Singapore, and pursued her Research Fellowship at the Cardiorenal Laboratory, Heart Failure Fellowship at the Division of Cardiovascular Diseases, and Advanced Cardiology and Master of Biomedical Sciences at Mayo Clinic, Rochester MN. She further obtained training in clinical and genetic epidemiology at the Framingham Heart Study in Boston, MA before returning to Singapore in 2010 on the National Medical Research Council’s Clinician Scientist Award. Dr Lam’s clinical sub-specialty is heart failure, and she is recognized globally for her expertise in heart failure with preserved ejection fraction.',
  },
  {
    name: 'Dr. Lee Chapman',
    twitter: 'Scientific Advisor',
    avatar: 'lee_chapman.jpg',
    // text:
    //   'Professor Lee Chapman completed his PhD entitled "A Blueprint for 21st Century Road Ice Prediction" here in Birmingham. The aim of the project was to assimilate new technologies to develop the next generation of road weather prediction models (Route Based Forecasting). The project involved the development of GIS models which utilised new survey techniques based upon GPS measurements and digital image processing. A university spin-out company called Entice Technology Ltd was set up using funding received from the NERC SBRI scheme (£125k) to fund further technological development, protection of intellectual property by the filing of patents and commercialisation of the work carried out for the PhD. The business was sold in 2006 to Weather Services International Ltd. Professor Chapman is still actively involved in research and business engagement with respect to winter road maintenance. He is presently the President of the Standing International Road Weather Commission (SIRWEC).',
  },
  {
    name: 'Dr. Daniela Andrich',
    twitter: 'Scientific Advisor',
    avatar: 'daniela_andrich.jpg',
    // text:
    //   'Miss Andrich is a Consultant Reconstructive Urological Surgeon working together with Professor AR Mundy forming one of the leading Reconstructive Urology Units world-wide with particular expertise in all aspects of urethral reconstruction, all types of compliations arising from prostate cancer treatments, repair of complex urological fistulae and other urological aetiologies requiring reconstructive surgery. As a full-time Consultant Miss Andrich operates 2 days/week at UCLH. Miss Andrich is a Honorary Senior Lecturer at UCL and organises the annual post-graduate Masterclass in Genito-Urethral Surgery, held at The Education Centre of UCLH in association with the British Association of Genito-Urinary Reconstructive Surgeons (BAGURS) and the Royal College of Surgeons of England.',
  },
  {
    name: 'Michael Terpin',
    twitter: 'Advisor',
    avatar: 'michael_terpin.jpg',
    // text:
    //   "Michael Terpin is a leading global expert and entrepreneur in communications and PR and in the last years he has become an authority on ICOs and crypto currencies. Michael Terpin spent his career innovating in PR, technology platforms, and the space in between. Currently, he runs Transform Group, the world leader in blockchain and ICO PR and advisory services (40 ICOs and counting). In 1999, Michael Terpin spun off Internet Wire, which he launched in 1994 as the first Internet-based company newswire, and raised $18 million from top-tier investors including Hummer Winblad and Sequoia Capital. Following a strategic investment by NASDAQ in 2003, the company became Market Wire (now Marketwired) and he sold it to CCN/Matthews in April 2006, which in turn was sold to OMERS Capital Partners in December 2006, for more than $100 million. Marketwired (www.marketwired.com) is currently the world's third largest company newswire.",
  },
  {
    name: 'Tariq Khan',
    twitter: 'Advisor',
    avatar: 'tariq_khan.jpg',
    // text:
    //   'Tariq was called to the Bar of England and Wales, working as a regulatory and transactional lawyer at financial services firms such as GE Money. In 2006 he joined the co-founding team at the MBO of a fledgling financial services company that went on to be one of the UK’s fastest growing companies for four years running, and a market leader in data analysis and customer-specific strategies. As Chief Legal & Compliance Officer he had oversight of all regulatory implementation and the negotiation of complex transactions. In 2011 he was voted by the industry to the Board of its trade association, the CSA, with responsibility for promoting compliance by its 400+ members whilst working with regulators and other bodies to ensure proportionate and operationally workable regulation. He was Entrepreneur in Residence at the 2017 Barclays Techstars fintech accelerator programme and a mentor at the F10 fintech accelerator.',
  },
  {
    name: 'Paul Mears',
    twitter: 'Advisor',
    avatar: 'paul_mears.jpg',
    // text:
    //   'Paul Mears is a financial professional and serial investor specialised in finance, healthcare, technology and alternative investments. He is the CFO and a co-founder of MoneyMailMe and is behind the Modex smart contract platform project. Paul started his career working in traditional pure accounting and finance and progressed into various commercial finance management roles. He has invested as a business angel in more than 20 companies, with a focus in the fields of cutting-edge Biotech, Med Devices, Fintech, Technology and Applications with the investee companies located in the UK, France, Sweden, and the USA. ',
  },
  {
    name: 'David Drake',
    twitter: 'Advisor',
    avatar: 'david_drake.jpg',
    // text:
    //   'David Drake is serial entrepreneur, thought leader and investor. He is the Chairman of LDJ Capital, a family office based in US. The LDJ Capital Multi-Family Office is the culmination of our executives’ career-long journey to serve UHNW families and individuals in a different way. David is founder and investor in  Victoria Partners, a 300 family office network based in London, UK; LDJ Real Estate Group and  Drake Hospitality Group. He is the founder and chairman of The Soho Loft Media Group with divisions Victoria Global Communications, Times Impact Publications, and The Soho Loft Conferences.',
  },
  {
    name: 'Nsofor Dickson',
    twitter: 'Advisor',
    avatar: 'nsofor_dickson.jpg',
    // text:
    //   'Nsofor Dickson is a serial entrepreneur who has led organisations in an Internet, mobile technology. Dickson has years of experience as a Blockchain researcher and Advisor to a number of companies and African Banks. He soon became a Lecturer at INSEEC Business School London, teaching Blockchain for Finance and Social Good. He founded Lixon Mobile, a low-cost mobile phone brand focused in the Chinese and West African Markets. In 2017 he Founded Kora.',
  },
]

const founders = [
  {
    name: 'Dinis Guarda',
    text:
      'Dinis Guarda is an author, founder and experienced CEO, specialised in Strategy, Digital transformation, and a Blockchain, Crypto economics/ ICO Evangelist. He is interested as well in cutting-edge breakthroughs in life science, and green energy solutions using the best of AI, big data, and distributed ledgers.',
    position: 'FOUNDER & CEO',
    photo: 'dinis-guarda.jpg',
  },
  {
    name: 'Ajan Reginald',
    text:
      'In 2009 Ajan founded Celixir, a leading Biotech company that discovers and develops life-saving and life-altering medicines, with Professor Sir Martin Evans, Nobel of Medicine. Ajan remains Celixir’s founding CEO and has led the company through exponential growth, 5 funding rounds and successfully brought 2 products to pivotal trials with partners including Harvard, Imperial College and Singapore University.',
    position: 'FOUNDER & CFO',
    photo: 'ajan-reginald.jpg',
  },
]

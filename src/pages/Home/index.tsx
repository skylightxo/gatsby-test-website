import React, { useContext } from "react";
import { CarouselComponent, AboutCard, Layout, DecorativeEllipses, PackageCard, PricingCard, ServiceCard } from "../../components/";
import { MenuContext } from '../../contexts/MenuContext';
import Image from '../../components/image';
import SEO from '../../components/seo';
import { ExperimentOutlined, LayoutOutlined, GiftOutlined, CheckOutlined, HeartOutlined, StarOutlined } from "@ant-design/icons";
import "./style.scss";
import { MobileMenu } from "../../components/MobileMenu";

const IndexPage = () => {
  const [state] = useContext(MenuContext);
  return (
    <Layout>
      <SEO title="sveahemsidor" />
      <MobileMenu state={state} />
      <DecorativeEllipses  />
      <section id="carousel">
        <CarouselComponent />
      </section>
      <Image className="curve-img" src="curve.svg" alt="" style={{marginBottom: 0, width: "100%"}} />
      <section id="about">
        <div className="title">
          <Image src="line.svg" alt="" style={{marginBottom: 20, marginLeft: 30}}/>
          <p style={{fontFamily: "Raleway", fontWeight: 700, fontSize: 20, marginBottom: 57, lineHeight: "115.7%", marginLeft: 30}}>Varför företag väljer<br /><span style={{color: "#1C5BFF"}}>sveahemsidor</span>?</p>
        </div>
        <div className="about-cards__container">
          <AboutCard icon={<ExperimentOutlined />} headingText="Skapa sidan själv" description={
            <p>Vårt sitebuilder verktyg innehåller allt du behöver för att bygga en proffsig hemsida. <br /> En befintlig hemsida kan enkelt importeras och ändras. Skapa egna sidor eller ta hjälp av våra färdiga mallar</p>
          }/>
          <AboutCard icon={<LayoutOutlined />} headingText="Inga forkunskaper kravs" description={
            <p>Drag n Drop, ingen Kodning eller tidigare erfarenheter kravs. Verktyget ar mycket enkelt och pedagogiskt att anvanda</p>
          }/>
          <AboutCard icon={<GiftOutlined  />} headingText="Allt du behöver" description={
            <>
              <p style={{marginBottom: 5}}>
                <span style={{marginRight: 10}}><CheckOutlined style={{color: "#1C5BFF"}}/></span>
                <span>Sökmotoroptimering</span>
              </p>
              <p style={{marginBottom: 5}}>
                <span style={{marginRight: 10}}><CheckOutlined style={{color: "#1C5BFF"}}/></span>
                <span>Importfunktion</span>
              </p>
              <p style={{marginBottom: 5}}>
                <span style={{marginRight: 10}}><CheckOutlined style={{color: "#1C5BFF"}}/></span>
                <span>SSL / HTTPS</span>
              </p>
              <p style={{marginBottom: 5}}>
                <span style={{marginRight: 10}}><CheckOutlined style={{color: "#1C5BFF"}}/></span>
                <span>Telefon support</span>
              </p>
              <p style={{marginBottom: 5}}>
                <span style={{marginRight: 10}}><CheckOutlined style={{color: "#1C5BFF"}}/></span>
                <span>Mobilanpassning</span>
              </p>
              <p style={{marginBottom: 5}}>
                <span style={{marginRight: 10}}><CheckOutlined style={{color: "#1C5BFF"}}/></span>
                <span>E-Handel</span>
              </p>
              <p style={{marginBottom: 5}}>
                <span style={{marginRight: 10}}><CheckOutlined style={{color: "#1C5BFF"}}/></span>
                <span>Flerspråsstöd</span>
              </p>
              <p style={{marginBottom: 5}}>
                <span style={{marginRight: 10}}><CheckOutlined style={{color: "#1C5BFF"}}/></span>
                <span>Kundsidor / Intranet</span>
              </p>
            </>
          }/>
        </div>
      </section>
      <section id="packages">
          <PackageCard title="BAS" price="Gratis!" icon={<GiftOutlined style={{color: "#1C5BFF"}} />} services={["Enkelt hemsidesverktyg", "Importera och redigera", "Befintlig sida", "100+ färdiga mallar", "Mobilanpassad hemsida", "Guider", "Obegränsat antal sidor", "2 GB Lagringsutrymme"]} />
          <PackageCard title="Professionell hemsida" price="149kr/Mån" icon={<HeartOutlined style={{color: "#1C5BFF"}} />} services={["Enkelt hemsidesverktyg", "Import befintlig", "Hemsida", "100+ färdiga mallar", "HTTPS", "Mobilanpassad hemsida", "Guider", "E-post", "Obegränsat antal sidor", "10 GB Lagringsutrymme", "Eget domännamn", "Flerspråksstöd"]} />
          <PackageCard title="E-handel" price="199kr/Mån" icon={<StarOutlined style={{color: "#1C5BFF"}} />} services={["Enkelt hemsidesverktyg", "Komplett", "E-handelsmodul", "Import befintlig", "Hemsida", "100+ färdiga mallar", "HTTPS", "Mobilanpassad hemsida", "Guider", "E-post", "Obegränsat antal sidor", "100 GB Lagringsutrymme", "Eget domännamn", "Flerspråksstöd"]} />
      </section>
      <Image className="curve-img" src="curve.svg" alt="" style={{marginBottom: 0, transform: "rotate(180deg) scaleX(-1)", width: "100%"}} />
      <section id="webhosting">
        <div className="title title-second">
          <Image src="line.svg" alt="" style={{marginLeft: 20}}/>
          <p style={{fontSize: 20, fontWeight: "bold", lineHeight: "115.7%", marginLeft: 20, marginBottom: 46}}>Stabila <span style={{color: "#1C5BFF"}}>webbhotell</span> <br /> för din verksamhet</p>
        </div>
          <PricingCard type="vertical" />
          <ServiceCard title="Max domännamn" type="triple" content={["1", "5", "30"]} />
          <ServiceCard title="Gratis registrering av domän" type="triple" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Lagringsutrymme" type="triple" content={[<span>5,000 <br /> Mb</span>, <span>10,000 <br /> Mb</span>, <span>25,000 <br /> Mb</span>]} />
          <ServiceCard title="Antal användare" type="triple" content={["5", "10", "25"]} />
          <ServiceCard title="MySQL Databases" type="triple" content={[" ", <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Gratis App Store" type="triple" content={[" ", <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Kontrollpanel" type="triple" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Daglig backup" type="triple" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="99.7% Upptid" type="triple" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Bandwidth" type="triple" content={["20gb", <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Installation" type="triple" content={["100kr", <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Advanced Security Features" type="triple" content={["Extra", "Extra", "Free"]} />
          <ServiceCard title="Telefonsupport" type="triple" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Website Builder" type="triple" content={["1", "50", "∞"]} />
          <ServiceCard title="30 dagar pengarna tillbaka" type="triple" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
      </section>
      <section id="wordpress">
        <div className="title title-third">
          <Image src="line.svg" alt="" style={{marginLeft: 20}}/>
          <p style={{fontSize: 20, fontWeight: "bold", lineHeight: "115.7%", marginLeft: 20, marginBottom: 46}}>Blixtsnabb site <br />med våra optimerade <br />webbhotell för <span style={{color: "#1C5BFF"}}>wordpress</span></p>
        </div>
          <PricingCard type="horizontal" />
          <ServiceCard title="Domännamn" type="double" content={["1 site", "Multisite stöd, 3 domännamn"]} />
          <ServiceCard title="Trafikgräns" type="double" content={["350GB", "1TB"]} />
          <ServiceCard title="Utrymme web och databas" type="double" content={["25GB", "50GB"]} />
          <ServiceCard title="Optimerad Nginx webbserver" type="double" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="WP optimerad databas" type="double" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="E-post konton" type="double" content={["25", "25"]} />
          <ServiceCard title="Kontrollpanel" type="double" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Daglig backup" type="double" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Onsite sökmotoroptimering" type="double" content={[" ", <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="99.9% Garanterad upptid" type="double" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Cloud Hosting" type="double" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Full support" type="double" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
          <ServiceCard title="Installation" type="double" content={["Gratis", "Gratis"]} />
          <ServiceCard title="30 Dagar pengarna tillbaka garanti " type="double" content={[<CheckOutlined style={{color: "#1C5BFF"}}/>, <CheckOutlined style={{color: "#1C5BFF"}}/>]} />
      </section>
      <section id="faq">
        <div className="faq__image-container" />
        <div className="title-fourth">
          <Image src="line.svg" alt="" style={{marginLeft: 20}}/>
          <p style={{fontSize: 20, fontWeight: "bold", lineHeight: "115.7%", marginLeft: 20, marginBottom: 46}}>Vanliga frågor och svar</p>
        </div>
        <div className="faq__text-container">
          <p className="faq__heading">Vem behöver wordpress <br /> webbhotell</p>
          <p className="faq__text">Paketen vi tagit fram och anpassat för wordpress är framtagna för mindre verksamheter som vill ha en snabb och tillförlitlig wordpress sida men där ni själva inte har den tekniska kompetens som krävs för en dedikerad server eller VPS. Ett mycket prisvärt alternativ för snabb WordPress helt enkelt.</p>
        </div>
        <div className="faq__text-container">
          <p className="faq__heading">Vad skiljer ett vanligt <br /> webbhotell och <br /> wordpress optimerat</p>
          <p className="faq__text">Det är stora skillnader, de servarar vi använder för optimerade webbhotell har betydligt lägre last än standard webbhotell,  alltså delas servrarna med färre andra sidor men det är bara en bra början. Eftersom wordpress kan vara mycket resurskrävande vid hög belastning har vi optimerat och skruvat på varje parameter för att få en optimal server konfiguration anpassar för wordpress. I grunden använder vi Nginx webbserver tillsammans med PHP-FPM & MySQL.</p>
        </div>
        <div className="faq__text-container">
          <p className="faq__heading">Hur mycket snabbare <br /> kan min sida bli?</p>
          <p className="faq__text">Vårt mål är att er WordPress site ska bli blixtsnabb, det ska kännas som om sidan laddas lokalt. Då varje site är unik och har sina specialla behov kan det komma att krävas individuella inställningar, något vi hjälper till med förlöpande. Vi arbetar på alla plan, från ttsb, ssl, sql frågor till cdn optimering.</p>
        </div>
        <div className="faq__text-container">
          <p className="faq__heading">Hur flyttar jag över <br /> sidan till wordpress <br /> hosting</p>
          <p className="faq__text">För vårt premiumpaket erbjuder vi gratis flytthjälp men det går självfallet bra att flytta sidan själv. Vi ger full tillgång till ftp och databas administration via vår kontrollpanel.</p>
        </div>
      </section>
      <section id="support">
        <div className="support__container">
          <p>Support?</p>
          <p>Ring oss</p>
          <Image src="line.svg" alt="" load="lazy"/>
          <Image src="boat.png" quality={100} alt="" style={{width: "25%", marginTop: 5, marginBottom: 31}}/>
          <Image src="line.svg" alt="" />
          <a href="tel:+4655016000">+46 550 16000</a>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage;
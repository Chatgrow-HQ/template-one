import { Link } from "react-router-dom";
import { FiArrowRight, FiClock } from "react-icons/fi";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PageHero from "../../components/page-hero";
import { blogData } from "../../data/data";
import scienceCentreGroupImage from "../../assets/images/skyways/real-science-centre-group.jpg";

export default function Blog() { return <div className="site-page"><Navbar/><main>
  <PageHero kicker="Skyways travel journal" title="Useful ideas for better journeys." copy="Clear destination guides, practical travel advice, and inspiration for your next domestic or international trip." image={scienceCentreGroupImage} imageAlt="Students and group leaders visiting Science Centre Singapore"/>
  <section className="site-section"><div className="site-container"><div className="section-head"><div><span className="site-kicker">Latest stories</span><h2 className="site-heading">Plan with more confidence</h2></div></div><div className="article-grid">{blogData.map(item=><article className="article-card" key={item.id}><img src={item.image} alt=""/><div className="article-card__body"><span className="site-kicker">{item.tag}</span><h2>{item.title}</h2><p>{item.desc}</p><div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:18}}><span className="site-copy" style={{fontSize:13}}><FiClock style={{display:"inline",marginRight:5}}/>5 min read</span><Link className="site-link" to={`/blog/${item.id}`}>Read article <FiArrowRight/></Link></div></div></article>)}</div></div></section>
</main><Footer/></div>; }

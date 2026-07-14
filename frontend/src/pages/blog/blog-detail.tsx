import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { blogData } from "../../data/data";

export default function BlogDetail() {
  const { id } = useParams();
  const article = blogData.find(item => item.id === Number(id)) ?? blogData[0];
  return <div className="site-page"><Navbar/><main>
    <article><header className="page-hero"><div className="site-container" style={{maxWidth:860}}><Link className="site-link" to="/blog"><FiArrowLeft/> Back to journal</Link><div style={{marginTop:32}}><span className="site-kicker">{article.tag}</span><h1 className="site-title">{article.title}</h1><p className="site-copy"><FiCalendar style={{display:"inline",marginRight:7}}/>{article.date} · By Skyways</p></div></div></header>
    <div className="site-container site-section" style={{maxWidth:860}}><img src={article.image} alt="" style={{width:"100%",maxHeight:500,objectFit:"cover",borderRadius:14}}/><p className="site-copy" style={{marginTop:34,fontSize:19}}>{article.desc}</p><h2 className="site-heading" style={{fontSize:28,marginTop:36}}>Plan around what matters to you</h2><p className="site-copy">A well-planned trip balances the highlights you want to see with enough time to experience the destination properly. Consider your preferred pace, the people travelling with you, local conditions, and the level of support you would like before confirming an itinerary.</p><p className="site-copy">Skyways can help coordinate flights, accommodation, tours, transfers, and practical travel support. Contact our team when you are ready to turn an idea into a clear plan.</p><Link className="site-button" to="/contact-us" style={{marginTop:18}}>Plan a trip with Skyways</Link></div></article>
  </main><Footer/></div>;
}

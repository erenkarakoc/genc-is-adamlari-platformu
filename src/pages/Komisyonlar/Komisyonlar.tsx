/* eslint-disable jsx-a11y/anchor-has-content */
import { memo } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Komisyonlar.css";

const Komisyonlar: React.FC = () => {
  return (
    <div className="page" id="page-companies">
      <PageHeader
        pageTitle="Komisyonlar"
        pageDesc="Genç İş Adamları Platformu, farklı sektörlerdeki genç iş insanlarını bir araya getiren
komisyonlar aracılığıyla faaliyet göstermektedir. Bu komisyonlar, belirli sektörlere
odaklanarak üyeler arasında işbirliği ve bilgi paylaşımını teşvik eder. Aşağıda,
platformun komisyonları ve her bir komisyonun sunduğu hizmetler ve işbirliği fırsatları
detaylandırılmıştır:"
        breadcrumbs={[
          { title: "Ana Sayfa", path: "/" },
          { title: "Komisyonlar", path: "/kullanıcılar" },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="section-title mb-3">
              <span>1. Ekonomi ve Finans Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Ekonomi ve finans dünyasında faaliyet gösteren iş insanları için
              oluşturulmuş bu komisyon, finansal analiz, yatırımlar, mali
              stratejiler ve piyasa trendleri üzerine odaklanır. Üyeler,
              finansal kaynaklara erişim, sermaye yönetimi ve bütçeleme gibi
              konularda bilgi ve deneyim paylaşımı yapar.
            </p>
            <h3 className="section-title mb-3">
              <span>2. Hukuk Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Hukuk sektöründeki genç profesyonelleri bir araya getiren bu
              komisyon, iş dünyasında hukuki destek sağlama amacıyla çalışır.
              Üyeler, şirketlerin yasal ihtiyaçlarına yönelik çözümler üretir ve
              iş dünyasındaki yasal gelişmeleri takip eder.
            </p>
            <h3 className="section-title mb-3">
              <span>3. Emlak Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Emlak sektöründeki genç girişimcileri bir araya getiren bu
              komisyon, gayrimenkul yatırımları ve emlak projeleri üzerine
              yoğunlaşır. Üyeler, emlak sektörüyle ilgili iş fırsatları ve
              projelerde işbirliği yapar.
            </p>
            <h3 className="section-title mb-3">
              <span>4. İnşaat Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              İnşaat sektöründeki iş insanlarını bir araya getiren bu komisyon,
              inşaat projelerinin planlanması, yönetimi ve geliştirilmesi
              üzerine çalışır. Üyeler, yeni projeler için ortaklıklar kurabilir
              ve deneyim paylaşımında bulunabilir.
            </p>
            <h3 className="section-title mb-3">
              <span>5. Sanayi ve İmalat Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Sanayi ve imalat sektöründe faaliyet gösteren üyelerin bulunduğu
              bu komisyon, üretim süreçlerini geliştirme ve iş hacmini artırmaya
              yönelik stratejiler üzerine odaklanır.
            </p>
            <h3 className="section-title mb-3">
              <span>6. Otomotiv Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Otomotiv sektöründeki genç iş insanlarını bir araya getiren bu
              komisyon, otomotiv sektöründeki gelişmeleri takip eder ve yeni
              projeler geliştirmek için üyelerine fırsatlar sunar.
            </p>
            <h3 className="section-title mb-3">
              <span>7. Yazılım ve Teknoloji Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Yazılım ve teknoloji alanında çalışan üyeler, bu komisyonda bir
              araya gelerek dijital çözümler üretir ve teknoloji tabanlı
              projelerde işbirliği yaparlar. Komisyon, yazılım geliştirme,
              teknoloji trendleri ve dijital dönüşüm konularında faaliyet
              gösterir.
            </p>
            <h3 className="section-title mb-3">
              <span>8. Ulaşım ve Lojistik Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Ulaşım ve lojistik sektöründe faaliyet gösteren iş insanları bu
              komisyonda bir araya gelerek, lojistik çözümleri ve taşımacılık
              stratejileri üzerine çalışırlar. Komisyon, tedarik zinciri
              yönetimi ve lojistik süreçlerin geliştirilmesi üzerine yoğunlaşır.
            </p>
            <h3 className="section-title mb-3">
              <span>9. Ticaret Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Ticaret sektöründe faaliyet gösteren genç iş insanları bu
              komisyonda yer alır. Komisyon, ticaretin geliştirilmesi, yeni
              pazarlara erişim ve işbirlikleri üzerine çalışır.
            </p>
            <h3 className="section-title mb-3">
              <span>10. Sigorta Komisyonu</span>
            </h3>
            <p className="user-detail-about">
              Sigorta sektöründeki iş insanlarını bir araya getiren bu komisyon,
              sigorta hizmetlerinin geliştirilmesi, müşterilere en uygun
              çözümlerin sunulması ve yeni sigorta projelerinin başlatılması
              üzerine odaklanır.


            </p>
            <p/>
            <p className="user-detail-about">
              Eğer platformumuzda yer almayan farklı bir sektörle ilgili bir
              komisyon oluşturmak isterseniz, yeni komisyon önerilerinizi
              memnuniyetle değerlendiririz. Platformumuz, üyelerimizin
              ihtiyaçları doğrultusunda şekillenen dinamik bir yapıya sahiptir.
              Yeni komisyonlar oluşturmak ve farklı alanlardaki iş fırsatlarını
              genişletmek için bize her zaman ulaşabilirsiniz. Böylece, iş
              dünyasında daha fazla sektöre hitap eden, geniş kapsamlı bir
              işbirliği ağı kurabiliriz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Komisyonlar);

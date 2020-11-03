import styles from './styles/ProjectDetail.module.css';

// Assets
import appstore from '../../public/images/appstore.png';
import playstore from '../../public/images/playstore.png';

const ProjectDetail = ({item, data, website}) => {
  return (
    <>
      <LandingSection item={item} />
      <DescriptionSection item={item} data={data} website={website} />
    </>
  );
};

const LandingSection = ({item}) => {
  return (
    <div
      className={styles['landing-section-container']}
      style={{backgroundColor: item.backgroundColor}}>
      <img src={item.landingimage} className={styles['image-container']} />
    </div>
  );
};

const DescriptionSection = ({item, data, website}) => {
  return (
    <div className={styles['description-section-container']}>
      <div className={styles['description-wrapper']}>
        <h1 className={styles['title-text']}>{item.title}</h1>
        <div className={styles['description-subtitle']}>
          <div>
            <p>Overview</p>
            <p>{item.projectdescription}</p>
            <p>{item.projectdescription1}</p>
          </div>
          <div>
            <p>Role</p>
            <p className={styles['role-title']}>{item.role}</p>
            <p>{item.roledescription}</p>
            <p>{item.projectdate}</p>
          </div>
        </div>
        {item.prototype === true ? (
          <div className={styles['button-container']}>
            {data.map((data) => {
              return (
                <a
                  style={{backgroundColor: item.backgroundColor}}
                  className={styles['prototype-button']}
                  target="_BLANK"
                  href={data.href}>
                  <div>
                    <p>See Prototype ({data.label})</p>
                  </div>
                </a>
              );
            })}
          </div>
        ) : null}
        <div className={styles['button-container-app']}>
          <a 
          href={item.appstorelink}
          target="_BLANK"
          className={styles['prototype-button']}>
            <div className={styles['app-button-container']}>
              <img className={styles['app-button']} src={appstore} />
            </div>
          </a>
          <a 
          href={item.playstorelink}
          target="_BLANK"
          className={styles['prototype-button']}>
            <div className={styles['app-button-container']}>
              <img className={styles['app-button']} src={playstore} />
            </div>
          </a>
          {website.map((website) => {
              return (
          <a
            className={styles['website-button']}
            href={website.href}
            target="_BLANK">
            <div>
              <p>See Website ({website.label})</p>
            </div>
          </a>
                   );
                  })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

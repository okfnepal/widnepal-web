import { useQuery } from '@apollo/react-hooks';
import { ABOUT_US_CONTENT, ABOUT_US_CONTENT_ERROR } from '../../graphql/about.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import WebsiteIcon from '../../assets/website_icon.svg'
import EmailIcon from '../../assets/email_icon.svg'
import {
  Image,
  Button
} from 'semantic-ui-react'

const About = () => {
  // Create a query hook
  const { data, loading, error } = useQuery(ABOUT_US_CONTENT);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  const ABOUT_US_PAGE = 'Committee Member'
  const COMMITTEE_PAGE_INTRO_OPTION = 'Introduction'
  const COMMITTEE_PAGE_MEMBERS_OPTION = "Member's Info"
  const filteredPageContents = data.abouts.edges.filter(post=>post.node.about_us_page.page===ABOUT_US_PAGE)
  const committee_introduction = filteredPageContents.filter(post=>post.node.about_us_page.insertOption===COMMITTEE_PAGE_INTRO_OPTION)
  const members_info = filteredPageContents.filter(post=>post.node.about_us_page.insertOption===COMMITTEE_PAGE_MEMBERS_OPTION)
  return (
    <PageLayout title={`About | ${ABOUT_US_PAGE}`}>
      <div style={pageStyles.mainContainer}>
        {committee_introduction[0] && <div style={pageStyles.aboutUsIntro} dangerouslySetInnerHTML={{ __html: committee_introduction[0].node.about_us_page.introduction }}/>}
        {members_info.length !== 0 ? members_info.map(post => {
          const page_data = post.node.about_us_page
          return (
            <div key={`post__${post.node.aboutId}`} style={pageStyles.memberContainer}>
              <div style={pageStyles.organizationName}>{page_data.member.organizationName}</div>
              {page_data.member.logo !== null && <Image style={pageStyles.logoItem} src={page_data.member.logo.mediaItemUrl} />}
              <div style={pageStyles.aboutUs} dangerouslySetInnerHTML={{ __html: page_data.member.description }}/>
              {Object.keys(page_data.socialMediaLinksAndEmail).map((item,id)=>{
                if (page_data.socialMediaLinksAndEmail[item]!==null) {
                  if (item==='facebook'||item==='twitter'||item==='linkedin') {
                    return <Button key={id} as='a' href={page_data.socialMediaLinksAndEmail[item]} circular icon={item} size='huge' style={pageStyles.socialMediaBtn}/>
                  } else if (item==='website') {
                    return <Button key={id} as='a' href={page_data.socialMediaLinksAndEmail[item]} circular icon={<Image src={WebsiteIcon} style={pageStyles.socialMediaCustomIcon}/>} size='huge' style={pageStyles.socialMediaBtn}/>
                  } else if (item==='email') {
                    return <Button key={id} as='a' href={`mailto:${page_data.socialMediaLinksAndEmail[item]}`} circular icon={<Image src={EmailIcon} style={pageStyles.socialMediaCustomIcon}/>} size='huge' style={pageStyles.socialMediaBtn}/>
                  }
                }
                return <span key={id}/>
              })}

            </div>
          );
        })
        :
        <div style={pageStyles.aboutUs} dangerouslySetInnerHTML={{ __html: ABOUT_US_CONTENT_ERROR.error }}/>
        }
      </div>
    </PageLayout>
  );
};

export default About;

const FONT_SIZE = 17
const pageStyles = {
  mainContainer: {paddingTop: 40, paddingBottom: 40},
  socialMediaCustomIcon: {height: 17, width: 19, top:6},
  socialMediaBtn: {backgroundColor:'white', padding: 5, color: '#1B9EFF'},
  aboutUsIntro: {fontSize: FONT_SIZE, paddingBottom: 20, fontWeight: 'bold'},
  aboutUs: {fontSize: FONT_SIZE, paddingTop: 20, paddingBottom: 20},
  organizationName: {fontSize: 26, fontWeight: 'bold'},
  logoItem: {marginTop: 15, maxHeight: 90, width: 'auto', maxWidth: 300},
  memberContainer: {borderBottom: '1px solid #E5E5E5', marginBottom: 70, paddingBottom: 30, paddingTop: 40},
}

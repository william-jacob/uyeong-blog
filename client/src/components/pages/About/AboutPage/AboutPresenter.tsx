import { DIV } from './AboutStyle';
import Head from 'next/head';
import LocationIcon from '@icons/LocationIcon';
import EnvelopeIcon from '@icons/EnvelopeIcon';
import GithubIcon from '@icons/GithubIcon';
import InstagramIcon from '@icons/InstagramIcon';
import Badges from '../AboutComponents/Badges/Badges';
import NavLinkBox from '@molecules/NavLinkBox';
import AboutAvatar from '@pages/About/AboutComponents/AboutAvatar';
import PageTitle from '@atoms/PageTitle';
import PageFrame from '@templates/PageFrame';
import { useState } from 'react';

const AboutPresenter = () => {
  const [isKorean, setKorean] = useState(false);

  return (
    <>
      <Head>
        <title>UYeong | About</title>
      </Head>
      <PageFrame>
        <PageTitle text="About" />

        {/* 1 */}
        <DIV.AboutMeAvatar>
          <AboutAvatar />
        </DIV.AboutMeAvatar>

        {/* 2 */}
        <DIV.AboutMe>
          <div>
            <ul>
              <li>U Yeong Jang</li>
              <li>Front-end developer</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <LocationIcon />
                &nbsp;Republic of Korea
              </li>
              <NavLinkBox href="mailto: wjacob2103@gmail.com" passHref={true} target="_blank" rel="noopener noreferrer">
                <EnvelopeIcon />
                &nbsp;wjacob2103@gmail.com
              </NavLinkBox>
              <NavLinkBox
                href="https://github.com/william-jacob"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
                &nbsp;Github
              </NavLinkBox>
              <NavLinkBox
                href="https://www.instagram.com/__uyeong__/"
                passHref={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                &nbsp;Instagram
              </NavLinkBox>
            </ul>
          </div>
        </DIV.AboutMe>

        {/* 3 */}
        <DIV.AboutBlog isKorean={isKorean}>
          <div>
            <button onClick={() => setKorean(false)}>EN</button>
            <button onClick={() => setKorean(true)}>KO</button>
          </div>
          {isKorean && (
            <div>
              <p>
                <span>안녕하세요!</span>
                <br />
                저는 장우영입니다. 프론트 엔드 개발자를 준비하는 과정에서 제 이야기를 기록하고 사용자와 같이 소통이
                가능한 웹페이지를 직접 만들고 싶어 이 블로그 사이트를 만들게 되었습니다.
              </p>

              <p>
                이곳에서는 제가 이 블로그를 만들면서 경험했던 것들을 시작으로, 이후 새로운 기술들을 배우고 여러
                프로젝트를 진행하면서 겪은 이야기와 제 일상의 이야기들을 모두 기록하려 합니다.
              </p>

              <p>
                여기를 방문해 주시는 분들과 서로 소통하고 피드백을 받으면서 같이 성장해 나가고 싶습니다. 자유롭게 많은
                의견 댓글로 남겨주시면 감사하겠습니다.
              </p>

              <p>방문해 주셔서 감사합니다!</p>
            </div>
          )}
          {!isKorean && (
            <div>
              <p>
                <span>Hello!</span>
                <br />
                My name is U Yeong Jang. As I prepare to become a front-end developer, I decided to create this blog
                site to record my journey and create a webpage where I can communicate with users.
              </p>
              <p>
                Here, starting with my experiences in creating this blog, I plan to document stories from learning new
                technologies, undertaking various projects, and sharing snippets of my daily life.
              </p>
              <p>
                I hope to connect with visitors like you, get feedback, and grow together. Feel free to leave comments
                and share your thoughts.
              </p>
              <p>Thank you for visiting!</p>
            </div>
          )}
        </DIV.AboutBlog>

        {/* 4 */}
        <DIV.AboutMeDetail>
          <div>
            <h3>Experiences</h3>
            <Badges />
          </div>
          <div>
            <h3>Likes</h3>
            <ul>
              <li>Making an effort to exercise regularly</li>
              <li>Visiting or discovering good places while traveling</li>
              <li>Making dishes like soufflés and egg tarts</li>
              <li>Taking pictures of food or landscapes like a pro</li>
              <li>Hiking in the not that high mountains</li>
              <li>Playing almost ball Sports</li>
              <li>Movie Marathon with wine and snacks</li>
              <li>Watching cute animal videos before going to sleep </li>
            </ul>
          </div>
        </DIV.AboutMeDetail>
      </PageFrame>
    </>
  );
};

export default AboutPresenter;

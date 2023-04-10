import styled from 'styled-components';
import { pointColor, primaryColor } from '../GlobalStyle';
import landingTitle from '../assets/images/landingTitle.png';

export const Container = styled.div`
  width: 99vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DarkContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: ${primaryColor};
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: ${primaryColor};
  font-size: 18px;
  font-weight: 550;

  // PC 화면
  @media screen and (min-width: 1024px) {
  }
  // 모바일 스타일
  @media screen and (max-width: 767px) {
  }
`;

export const Header = styled.span`
  color: ${primaryColor};
  font-size: 16px;
  font-weight: 800;
`;

export const MyPage = styled.img`
  width: auto;
  height: auto;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 13px;
`;

export const CursorText = styled.span`
  cursor: pointer;
`;

// Box--------------------------------------------
export const TitleBox = styled.section`
  width: 350px;
  min-height: 50px;
  background-image: url(${landingTitle});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export const QuestionBox = styled.section`
  width: 350px;
  min-height: 200px;
  overflow: hidden;
  word-wrap: break-word;
  border-left: 5px solid ${primaryColor};
  border-right: 5px solid ${primaryColor};
  margin: 10px 0 50px 0;
  padding: 20px;
`;

export const CommentBox = styled.section`
  width: 350px;
  height: auto;
  padding: 1%;
  overflow: hidden;
  word-wrap: break-word;
`;

export const LogOutBox = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonBox = styled.section`
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

// Modal----------------------------------------------
export const modalStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 325,
  height: 350,
  bgcolor: 'background.paper',
  border: `1px solid ${primaryColor}`,
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
};

// Image---------------------------------------------
export const ImageBox = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: 1px solid linear;
`;

export const Img = styled.img`
  width: auto;
  margin-bottom: 15%;
`;

export const SmallImg = styled.img`
  width: 16px;
`;

export const SubTitle = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  color: #fff;
`;

export const SubTitle404 = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${pointColor};
`;

export const Bracket = styled.span`
  visibility: hidden;
`;

export const DeleteText = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
  font-weight: 700;
  opacity: 50%;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${primaryColor};
  }
`;

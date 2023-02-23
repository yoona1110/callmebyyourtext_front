import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TitleLogo from "../assets/images/titleLogo.png";
import { modalStyle, SmallImg, Wrapper } from "../components/Styled";
import { Box, Modal, Typography } from "@mui/material";
import { pointColor, primaryColor } from "../styles/GlobalStyle";
import ListBtn from "../components/Button/ListBtn";
import Answer from "../components/Answer/Answer";

const QuestionList = ({ questionId, questionText, questionAnswer }) => {
  // 변수 관리
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const { isLoggedIn } = useContext(AuthContext);

  // 모달 관리
  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  // 답변 관리(임시)
  const answerArray = [
    { id: "1", text: "test content1", writer: "abc", answer: "real" },
    { id: "2", text: "test content2", writer: "def", answer: "how" },
    { id: "3", text: "test content3", writer: "ghi", answer: "what" },
  ];
  const answerList = [
    answerArray.map((ans) => (
      <Answer
        key={ans.id}
        questionId={ans.id}
        questionText={ans.text}
        questionAnswer={ans.answer}
      />
    )),
  ];
  // const fetchAnswer = async () => {
  //   try {

  //   } catch {

  //   }
  // };
  // useEffect(() => {
  //   fetchAnswer();
  // }, []);

  return (
    <>
      <Wrapper>
        <Typography
          variant="h5"
          sx={{
            color: `${pointColor}`,
            borderBottom: `1px solid ${primaryColor}`,
            marginBottom: "10%",
          }}
        >
          <SmallImg src={TitleLogo} /> {userName}님의 질문 리스트
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ListBtn btnName={"list1"} onClick={modalOpen}></ListBtn>
        </Box>
      </Wrapper>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>{answerList}</Box>
      </Modal>
    </>
  );
};

export default QuestionList;

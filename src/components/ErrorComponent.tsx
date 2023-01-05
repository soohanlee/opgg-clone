import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ErrorContainer = styled.div`
  width: 380px;
  padding: 0;
  margin: 104px auto 50px;
  color: #202d37;
  color: var(--gray900);
  text-align: center;
`;

const ErrorHeading = styled.h1`
  line-height: 32px;
  font-size: 24px;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  margin-top: 24px;
  font-size: 15px;
  white-space: pre-line;
`;

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <ErrorContainer>
      <ErrorHeading>{t("errorPage.title")}</ErrorHeading>
      <ErrorMessage>
        {t("errorPage.message_1")}
        <span>{t("errorPage.message_2")}</span>
        {t("errorPage.message_3")}
      </ErrorMessage>

      <button onClick={() => navigate(-1)}>Back</button>
    </ErrorContainer>
  );
};

export default ErrorPage;

import { Container, makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    textAlign: "center",
  },
  h3: {
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
}));

const About: FC = () => {
  const classes = useStyle();

  return (
    <>
      <Container className={classes.root} maxWidth={false}>
        <Typography id="about" variant="h3" className={classes.h3}>
          About
        </Typography>
        <Typography variant="h6">
          1993年生まれの27歳。大学では物理学を専攻するも、そこでプログラミングに出会いハマったことでIT業界を志しました。
          新卒で野村総合研究所に入社し、コンビニエンスストア向けの業務システムの保守・運用並びに新規システム構築に約2年間従事。
          半年間の転職活動を経て、現職は都内のECサイトを運営する企業でサーバサイドエンジニアとして参加しています。
          好きなことは温泉、サウナとその後のビール！あと、全く当たらない競馬予想です。
        </Typography>
      </Container>
    </>
  );
};

export default About;

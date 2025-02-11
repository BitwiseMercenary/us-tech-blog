import Container from "components/Container";
import Section from "components/Section";
import styles from "components/PostContentSection/styles.module.css";

export default function PostContentSection({ post }) {
  return (
    <Container>
      <Section>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Section>
    </Container>
  );
}

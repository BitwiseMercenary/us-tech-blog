import { useEffect, useState } from "react";
import Container from "components/Container";
import Section from "components/Section";
import { fetchJobs } from "libs/jobs";
import Title from "components/Title";
import styles from "components/JobSection/styles.module.css";

export default function JobSection() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchAndSetJobs() {
      const techJobs = await fetchJobs();
      setJobs(techJobs);
    }

    fetchAndSetJobs();
  }, []);

  return (
    <Container>
      <Section>
        <Title value="Join our team" id="careers" />
        <p className={styles.paragraph}>
          The Technology Team delivers innovative products through rapid,
          continuous development. You’ll be with people who take pleasure in
          software design and believe that velocity comes from a commitment to
          clean code and solid engineering principles.
        </p>

        {jobs.length ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Position</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.id}>
                  <td>{index + 1}</td>
                  <td>
                    <a
                      href={job.absolute_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.jobTitle}
                    >
                      {job.title}
                    </a>
                  </td>
                  <td>{job.location.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className={styles.paragraph}>
            There are currently no job openings. Please check back later.
          </p>
        )}
      </Section>
    </Container>
  );
}

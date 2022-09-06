import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export default function GithubChart(props: { githubId: string }) {
  // 렌더링 전에 react-tooltip을 불러오지 않게 하기 위해 사용
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <GitHubCalendar
          username={props.githubId}
          labels={{
            totalCount: "Learn how we count contributions",
          }}
          showWeekdayLabels
          blockSize={13}
          style={{
            height: "14.46rem",
            width: "66.66rem",
          }}
        >
          <ReactTooltip html />
        </GitHubCalendar>
      )}
    </>
  );
}

import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChallanges.module.css";

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <div className={styles.completedChallangesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}

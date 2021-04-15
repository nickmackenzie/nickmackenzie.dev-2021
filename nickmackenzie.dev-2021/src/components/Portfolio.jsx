import React from "react";
export default function Portfolio(props) {
  return (
    <div className="about-text">
      <div className="project-wrapper">
        <div class="box">
          <div class="side-1">
            <div class="screenshot">
              <a href="http://trivia-night-django-app.herokuapp.com/"></a>
            </div>
          </div>

          <div class="side-2">
            <div class="title">Trivia Night Game</div>
            <div class="desc">
              <p>
                A full stack multiplayer trivia game. This uses Django as a
                framework and Postgres as a database. Users can have their own
                account and be placed on a global <span> leaderboard.</span>
              </p>
            </div>
            <div class="tech"></div>
          </div>
          <div class="sources">
            <a href="https://github.com/nickmackenzie/projectWolverine">
              Github
            </a>
            <a href="http://trivia-night-django-app.herokuapp.com/">Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

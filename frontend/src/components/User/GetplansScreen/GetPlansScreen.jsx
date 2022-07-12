import React from 'react'
import './GetPlansScreen.scss'

function GetPlansScreen() {
  return (
    <div className="container">
      <div className="row">
        {/* getplans-card */}
        <div className="col-md-4 getplansscreen primary-backgroundColor">
          <div className="top">
            <div className="tname">
              <div className="ttext primary-Color">Full Body Workout</div>
            </div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="trainercardimg"
            />
          </div>
          <div className="bottom">
            <div className="cat">
              <div className="category primary-backgroundColor">
                <p>₹4000/month</p>
              </div>
            </div>
            <div className="coached">
              <p className="coachedcount">Weekly 7 days Workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">Brinto Babu</p>
            </div>
            <div className="enrol">
              <button className="enrolbtn">Join Now</button>
            </div>
          </div>
        </div>
        {/* getplans-card */}
        {/* getplans-card */}
        <div className="col-md-4 getplansscreen primary-backgroundColor">
          <div className="top">
            <div className="tname">
              <div className="ttext primary-Color">Full Body Workout</div>
            </div>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NEA8PGisZExkrLisrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADwQAAIBAgQEAwYFAgQHAQAAAAABAgMRBBIhMQVBUWEicYEGEzJCkbFiocHR8CNSM3KCkkNTosLS4fEU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4+QhCoFiDEAUIAgQhCAQhCAQKAMgCkFEsGwEsSxEhrALlCkMkNYARYWDKOkAtgWHA0ApLDJBsAhBmK2AjQSJAYCyFJcNgAmMpCkTAszEFuQBABIBCEIACBABGQIAIQgbARDoVDIAojCFIAxR1OF8GnWUp6QhFXcnz7RXNm3gnCIZVWrzUYN2it22mrtrormrifEP7VkSzpQ5bqKS6K1wOVicDCEkruWaKktGmr23X5mOvTjGSV7rT8yYziLbvfxap+V7/AHM1B33AvVPuCxZSik9Nh69Kz+wGdoMIjJBARINgsrcuQCyELHBsGWwCMrZZIGUBEgSLLFcgAmRESCBEQKZABYDGA0AoAkAJLEsM0AqQcoRsoFdiDtAsAEhkRIawAOjwbh7rTUbNpaysm3bpps2c9I38PxtSkpKHzxa0321t6XA9HxbG0YKzyt0o5YQirWlO9nJ21yuK89DyvEMYpTckrXvbnvdvfzf0MdWo3vzK7NgS5bQnYokgxYHQVS5pw7c3k+n6GKina9jXhpOE4yfJpgC4rNHEqGSbS2esf8r1X87GNsCSdyRiRFqQAWgriXQ1LFS6AY5QsJJGmtEpkgKnsUy3La0yoAMNwEQDWIMQAWI0RDAI0RRGsFIAKIUhkhrAJFEkMkRoCslhlEbKAIxHUQpFkUBUolkVazI0WRQFuAlSjUTqU1Km9Jx5qL3cX1W68i32i4HLC1HGS8Lfga+aO6f0sZkdTEcQnXoZJ5W6FJZJNNycVUhBR9FN6/h9QPLzVxLHSnwufu/epxcMzi2nqn0atpc58wN2E4hUhZKTyr5b+FrmnHZnoKWDhNX0TvtytujytGS5npOC4q+mgHajhadSmqNXRL4KsVeVNve8fnh1j9NTzXEuF1KLd0pR5VIPNB977ryaTPRvFTpvxRdnsy6OPX9tn15AeLpxuW+7PXueGn8dOF+trP8A3KzJP2apzWalNr8MtY/v9wPM4eglqxp9jXiMDUhJxlTfh3a1XW6ktGrMontcDFVRlqs11THW3sBmkLYskhQAkRIZIDQDJkIQBYjAQwERaolSL4oCe7AomumkWukgMOQMKLk1GKbbaSSV229EkubNjpouVVUac6kfjlenBreKavUkujs1FP8AGwNGA4HC8oykpygs1WWdQw9CO39WtZubvpaC1eicjLjcZg4+GlQdV/8AMnOpTg3+GkpOVvOafYHtDiPdxhgoO0aajUr2/wCJiJRu7vnGEXGCXLxPmcJyA01cVd3UIxXSLn/3SbHpVVL9jC2SE2mmt1/NQOjlHjELs3dbOzV97NXV+4YgBl+Dxbp57JPPTlTd+Sk07rveKKrBygXSxDWdqzjUgs8FaOWUW8uVbNJJbdTh1d9Ue/4V7IZqaq4mp7qL1VNf4sk9t9IvtZvyOhT9gsPOfv6k6qoJZvd2/q1LbqNrNJ9bID5dGDeyvbft5ltKbWzPW8T4xUqKWFw+HjSw70VLKnJ6/FKS3l31K8DwhQesbvvrYCrhNSpNKLk7fi29D1uC4NBx1mn/AKbHOoYCKd7WOnTk4rTYDg4hUlVaUNnbm/WzOlTqp78tl1MHEqOrkvUzRxGm+qA9JngkmilYGhWnGnVWVTaiq0LKcJPRZ1tON7LXXo0cKWO03Ko8RdpRbumBn9o+E1cHXnQqpZo6pr4Zxfwzj2f5NNcjiyR6/i2NljsNGU3mr4ZO8uc6K+K/Vx0k+2Znk2gKJRK3E0NFcgK0RguF7gCTIMyAQKRAXAsQ6ZUhkwL4yNEXpcw5y2nIDZfmVcQnpTb2U5N+Xgf6MEJMNaGeLXPl5/z7gYuMTbr1m+dSb9HJ2/KxibLMVJuV5fFopX6pWv8ARIpuAWyAGp03JpLdgdPBLwR9fuy9kpwsrdESwEud72bwsFfE1V4IPwJ/NJc/JffyODY9diXGkqVP+xJJcnU3lN+Wvq+wHo+ExnUfva2l9YQe8V1a6nU45xxUKMlTtna1lz+p5/CYt/NJHE9ocXOcowzKzklvrq7Aej4JwmNLD++qK9Wr4td0nsu29/UzVKajds69d2pxje9lY8/j6+XmAinrdlyxEbWPO4nH2e5lrcV5p+gGrj1aVLxbpnnnjtbos4hxZzi4s5EZAdR4q40Z3MuHhc1Km0Bv4fXnTnGpB2cHdc0+TTXNNXT7Ms41gIpLEUFajN2cd3Qq2u6Mu3OL5rumJh9EWUsU6eZPWnUWWrHe8b3TX4ovVPk0BxZIpmasXScJON72e62a5NdmrMzNAVqJGhgMBWQDfYgDEBcNwCQiCwAiymypMeIGyDLIsyxkWxmBbUpxla8b/wA6mWrwlN+GVuzV/wAzXCTLkgOXHhbSu3dXs7b+Z6bEcEoqj77C5mopKrGTvON9p6fLfR9H5mOGqlHqr+q1/ct4Hxh4eopbxd4zi9VKL0aYHPYEjvcb4Olavh/FQlrpq6bfyy7dH6Pvy6dG7t15gd/2R9lnif6tSWWlF8vin5dFpa50PbXHYaMlBUvHBrxbNfxCVOL+6pJRbiorLFxbTt6HhuI8Qzycs0m2/m1A9RV8NPM3urp9jzUsW3VjeV7SX5O5nr8VbpQp/wBqaf1dvysWez/Cp4ipBXUU5JXfPrYD6lRy5HJy3VzyPG8bFXf01Wpv9tMBiMNCLpzU4fDb5tOx89xuJqTaz302T213dvRfQC7EYy7MdSu2VthglzAGpEaJWa0KlEDThJ2OpRq3OKnY2YeqB0p1SidS+hVOoVSqAaqsVKmmvih4Zd4v4H6O69YmBo1YLFqE7y1hJOM0t3CW9u63XdITG0HTm4N3s9GtpJ6xkuzTT9QMlQS40xGBLgFCBYFFdxogWpCyYxWwGigiXGbAsiy2LM6ZbFgaqcjTGRghItU9ANLqWZlqxd30uFzG98rAdzgHGZ0o5FJJa7pN67rXSxrw1ClVxEL5YxlJZorSLb5R6X6d9DyTrNGzhnFFSqU5TWaMZxk1ts+oF3tZW91U/wDzxfhp6Xe75/zyPOp3PS+0nFIVldRS1eW6WZK+zfM8zFAacNhlOUI3tmlGN+ibSbPfYHh1NVYKm8sY2V1v31PB4RtTg1upRf5o9rhI15XhSheo3dNu0V5sD0ftR7OYVr3ssRWbS+FSVvtoeNxnBoTg6t0oJNRje83bnJ8kU8dwuPgn72yj2ldHFw9SpOEoOeWC1fWT5RQGCcFd22NNGnHmI4Zd9O3P1DSqa6K7AsqxXJadTM0aayfN+hlkwFau7Ghq2q26dCil1/ljVBgVuqBpjyw93eP0L8ZDItdwMctDQ62enFveF4P/AC/FD7yXlFGCUrmjA1IpyjPaSsn/AGzTvFvtun2lfkAJCMZiMAEIECDQFHigGkypsaoxAHQUBMNwGHRXEYB4suTKYoe4D3K6g9xJAUzfMrm7jyfIrygN7xtWeoIgzdB6cANOGWqfQ99W4rKjTV1kdrra78zx/BaOarCKSfi2ldJ218TXLQ9rxfi+F93kqQjJrf5kn0TA8FxjjM60tZto24eSVD+nHKvmqPeT6ROhw7gdLEN1Mqp00/hW77C+09VaQgssIq0VsB5eTXMMZPaKKZR1LVOysgJPTd6lEnck5DwgA8EWpiRQwGrBrW/JamPH180jYtKfmc2at5sBUSEbvyA2PT28wHbEYWK2BCACBC0rQ1wBMFhmBASI1gNEQBQ9xUMA8WG5WixICEY0gAU1UVrYvlEpcQBCJshEopouUgOnwKdql/wv9EdN8MhUlrL0ORwqjLxTt4V4b/ietvOyNOMxMqS8LbqS2SV2gO3jcfRwsLRs3ba+3oeI4hxF1ZuTLMTgK7Wad/W5heFkt0wI6pZGOg1OilyHnLQClUvm6tpem/3LIo3Y3D2p0JLaVJ/7lUnmX0cfqY0BEMlfQBu4XQTed7LZdX+y/YCYyNl2SXqzk1HdnQ4niLy02W37nMkwFtd2LhYRt5hAjYGQWTAhAXIBaAjAAyZGKmNcBkGwpIsB7BSIgMByZirMHMBZuRMrjIjYDtiTZIsWQDQLSqBooQzSS0XduySWruwO9RxlFU6eaDpyvUh4byvrFuTi3ptFXvz2HwNehGo6l51HbRZH4X10vf8AICj/AFqMZxzKOqtGUszzW0jo92tOx1sXxJRVnkvqsrlb0yqrZfQDncY9paM4qCTi1vdWv6WueZrV1J3VSH/X/wCJZxTFRlJ3pxXdSb/c5lRR5Aaarto5R9M37CZl1f0KZyvqwxYHoKVBvCRvCyVSTUnveSjbfZO1tNLo5VjVg62J923B5qaacou0ou2qbjLe1t90Pgpxne9BLo4zmknzSTvf6gZaVJyajFXbOjiakaaUIu9lZvq73b8jTXqUqavGmoNJ5nmbbv8AKly/+nAr1rpt7vl0QFFapdtkhDm/QaFPm/oMwFYrGYjYAYCMgEAEgFjARsABCBEAZATIC4FyYWIg3ADQLFiZJAVgTGYoDIawqkFSANjqez6XvVmSemiavrvt6HLkdH2dlasvJ+Xa/rZeoHqHxGEa0c06cdNIzi2pct46qyv/ALmcz2gx1OaahThDvljODt0l8UfzK+NU4qSqZb2v5xl3PK1Em9Zt+n/sCVKTv8K9LWEcF5BcYLn90/t+pIOPO/8AO4CxtzuFW5Mdzj0KnPsgOtwWrCMnni5RcZQunrFyVsyvo2WKvlXxbc/v6nOo3fWyV32S/lvUpqVNEgL8VjHN76FVOV5L+bFDZowtP5n6fuBfIRjSEYCyYozFAgAkAhCEAYhCADmEJAIgBIAyGiQgDMUhAFAyEADGW5CAOzfwH/F/0v7ohAOxxfa/PrzPM42Kte2tyEAw2FYSARAqbkIBdTfgl5x/X9kUxe/l+qIQAdfQ6CIQASEYCAAUJAFIQgBIQgH/2Q=="
              alt=""
              className="trainercardimg"
            />
          </div>
          <div className="bottom">
            <div className="cat">
              <div className="category primary-backgroundColor">
                <p>₹4000/month</p>
              </div>
            </div>
            <div className="coached">
              <p className="coachedcount">Weekly 7 days Workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">Brinto Babu</p>
            </div>
            <div className="enrol">
              <button className="enrolbtn">Join Now</button>
            </div>
          </div>
        </div>
        {/* getplans-card */}
        {/* getplans-card */}
        <div className="col-md-4 getplansscreen primary-backgroundColor">
          <div className="top">
            <div className="tname">
              <div className="ttext primary-Color">Full Body Workout</div>
            </div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="trainercardimg"
            />
          </div>
          <div className="bottom">
            <div className="cat">
              <div className="category primary-backgroundColor">
                <p>₹4000/month</p>
              </div>
            </div>
            <div className="coached">
              <p className="coachedcount">Weekly 7 days Workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">Brinto Babu</p>
            </div>
            <div className="enrol">
              <button className="enrolbtn">Join Now</button>
            </div>
          </div>
        </div>
        {/* getplans-card */}
        {/* getplans-card */}
        <div className="col-md-4 getplansscreen primary-backgroundColor">
          <div className="top">
            <div className="tname">
              <div className="ttext primary-Color">Full Body Workout</div>
            </div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="trainercardimg"
            />
          </div>
          <div className="bottom">
            <div className="cat">
              <div className="category primary-backgroundColor">
                <p>₹4000/month</p>
              </div>
            </div>
            <div className="coached">
              <p className="coachedcount">Weekly 7 days Workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">Brinto Babu</p>
            </div>
            <div className="enrol">
              <button className="enrolbtn">Join Now</button>
            </div>
          </div>
        </div>
        {/* getplans-card */}
        {/* getplans-card */}
        <div className="col-md-4 getplansscreen primary-backgroundColor">
          <div className="top">
            <div className="tname">
              <div className="ttext primary-Color">Full Body Workout</div>
            </div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="trainercardimg"
            />
          </div>
          <div className="bottom">
            <div className="cat">
              <div className="category primary-backgroundColor">
                <p>₹4000/month</p>
              </div>
            </div>
            <div className="coached">
              <p className="coachedcount">Weekly 7 days Workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">Brinto Babu</p>
            </div>
            <div className="enrol">
              <button className="enrolbtn">Join Now</button>
            </div>
          </div>
        </div>
        {/* getplans-card */}
        {/* getplans-card */}
        <div className="col-md-4 getplansscreen primary-backgroundColor">
          <div className="top">
            <div className="tname">
              <div className="ttext primary-Color">Full Body Workout</div>
            </div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="trainercardimg"
            />
          </div>
          <div className="bottom">
            <div className="cat">
              <div className="category primary-backgroundColor">
                <p>₹4000/month</p>
              </div>
            </div>
            <div className="coached">
              <p className="coachedcount">Weekly 7 days Workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">Brinto Babu</p>
            </div>
            <div className="enrol">
              <button className="enrolbtn">Join Now</button>
            </div>
          </div>
        </div>
        {/* getplans-card */}
      </div>
    </div>
  )
}

export default GetPlansScreen

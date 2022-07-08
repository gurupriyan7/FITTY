import React from 'react'
import "./UserHomeScreen.scss"
// import InsertCommentIcon from '@mui/icons-material/InsertComment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment';
function UserHomeScreen() {
  return (
    <div className='trainerhomescreen'>
      <span className="poststext">Posts</span>
      <div className="singlepost">
        <div className="postuserdetails">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqtDdxwuz8djhPKpWhiDQ3evq_vk6VkUnLA&usqp=CAU"
            alt=""
            className="postuserimg"
          />
          <span className="postusername">Gurupriyan</span>
        </div>
        <img
          src="https://www.telegraph.co.uk/content/dam/football/2021/08/05/TELEMMGLPICT000267249163_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwauLYewjGO21NF-o1gxbkUI.jpeg"
          alt=""
          className="postimg"
        />
        <div className="likeandcomment">
          <div className="like">
            <span className="liketext">
              <ThumbUpIcon />
              Like
            </span>
            <br></br>
            <span class="tooltiptext">
              <ThumbUpIcon style={{ color: 'red' }} />
              112
            </span>
          </div>
          <div className="comment">
            <span className="commenttext">
              <InsertCommentIcon />
              Comment
            </span>
            <br/>
            <span class="tooltiptext">
              <InsertCommentIcon style={{ color: 'red' }} />
              112
            </span>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="singlepost">
        <div className="postuserdetails">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqtDdxwuz8djhPKpWhiDQ3evq_vk6VkUnLA&usqp=CAU"
            alt=""
            className="postuserimg"
          />
          <span className="postusername">Gurupriyan</span>
        </div>
        <img
          src="https://www.telegraph.co.uk/content/dam/football/2021/08/05/TELEMMGLPICT000267249163_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwauLYewjGO21NF-o1gxbkUI.jpeg"
          alt=""
          className="postimg"
        />
        <div className="likeandcomment">
          <div className="like">
            <span className="liketext">
              <ThumbUpIcon />
              Like
            </span>
            <br></br>
            <span class="tooltiptext">
              <ThumbUpIcon style={{ color: 'red' }} />
              112
            </span>
          </div>
          <div className="comment">
            <span className="commenttext">
              <InsertCommentIcon />
              Comment
            </span>
            <br/>
            <span class="tooltiptext">
              <InsertCommentIcon style={{ color: 'red' }} />
              112
            </span>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="singlepost">
        <div className="postuserdetails">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqtDdxwuz8djhPKpWhiDQ3evq_vk6VkUnLA&usqp=CAU"
            alt=""
            className="postuserimg"
          />
          <span className="postusername">Gurupriyan</span>
        </div>
        <img
          src="https://www.telegraph.co.uk/content/dam/football/2021/08/05/TELEMMGLPICT000267249163_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwauLYewjGO21NF-o1gxbkUI.jpeg"
          alt=""
          className="postimg"
        />
        <div className="likeandcomment">
          <div className="like">
            <span className="liketext">
              <ThumbUpIcon />
              Like
            </span>
            <br></br>
            <span class="tooltiptext">
              <ThumbUpIcon style={{ color: 'red' }} />
              112
            </span>
          </div>
          <div className="comment">
            <span className="commenttext">
              <InsertCommentIcon />
              Comment
            </span>
            <br/>
            <span class="tooltiptext">
              <InsertCommentIcon style={{ color: 'red' }} />
              112
            </span>
          </div>
        </div>
      </div>
      <div className="space"></div>
      <div className="singlepost">
        <div className="postuserdetails">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqtDdxwuz8djhPKpWhiDQ3evq_vk6VkUnLA&usqp=CAU"
            alt=""
            className="postuserimg"
          />
          <span className="postusername">Gurupriyan</span>
        </div>
        <img
          src="https://www.telegraph.co.uk/content/dam/football/2021/08/05/TELEMMGLPICT000267249163_1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwauLYewjGO21NF-o1gxbkUI.jpeg"
          alt=""
          className="postimg"
        />
        <div className="likeandcomment">
          <div className="like">
            <span className="liketext">
              <ThumbUpIcon />
              Like
            </span>
            <br></br>
            <span class="tooltiptext">
              <ThumbUpIcon style={{ color: 'red' }} />
              112
            </span>
          </div>
          <div className="comment">
            <span className="commenttext">
              <InsertCommentIcon />
              Comment
            </span>
            <br/>
            <span class="tooltiptext">
              <InsertCommentIcon style={{ color: 'red' }} />
              112
            </span>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </div>
  )
}

export default UserHomeScreen

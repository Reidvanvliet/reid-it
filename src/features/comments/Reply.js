<div>
        {comment.data.replies.data.children.map((reply, index) => (
            <Comment key={index} comment={reply} />
        ))}
        </div>
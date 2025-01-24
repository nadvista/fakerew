import React from 'react';
import styles from './CommentItem.module.css'

interface CommentProps {
    text: string;
    name: string
}

const CommentItem: React.FC<CommentProps> = ({text, name}) => {
    return (
        <div className={styles.comment_item}>
            <div className={styles.comment_name}> {name} </div>
            <div className={styles.comment_text}> {text} </div>
        </div>
    );
};

export default CommentItem;
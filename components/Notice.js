import React from 'react'

const styles = {
    notice: 'flex border border-[#30363b] mx-11 my-4 p-5 flex-col flex-1',
    noticeContainer: 'flex-1',
    noticeTitle: 'text-gray-500',
    noticeMessage: 'text-white font-bold',
    noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
}

export const Notice = () => {
  return (
    <div className={styles.notice}>
        <div className={styles.noticeContainer}>
            <div className={styles.noticeTitle}>Fund Your Account</div>
            <div className={styles.noticeMessage}>Your Bank Account is Ready! Fund your Robinhood Account to begin trading</div>
        </div>
        <div className={styles.noticeCTA}>Add Funds</div>
    </div>
    
  )
}

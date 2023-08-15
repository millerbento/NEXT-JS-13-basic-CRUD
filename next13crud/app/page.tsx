import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}> 
      <div>
        <h1>Home Page</h1>
        <p>
          Welcome to our test home page! Explore our intuitive layout, 
          seamless navigation, and engaging content as we prepare to 
          launch our exciting new website. Experience a sneak peek of what&apos;s to come.
        </p>
      </div>
    </main>
  )
}


export default UserCard = ({ user }) => {
<Card className={cx(styles.card, shadowStyles.root)}>
<CardContent>
  <Avatar className={styles.avatar} src={''} />
<h3 className={styles.heading}>Yo</h3>
<span className={styles.subheader}>Hello</span>
</CardContent>
<Divider light />
<Box display={'flex'}>
  <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
    <p className={styles.statLabel}>Followers</p>
<p className={styles.statValue}>11</p>
  </Box>
  <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
    <p className={styles.statLabel}>Following</p>
    <p className={styles.statValue}>12</p>
  </Box>
</Box>
</Card>
}

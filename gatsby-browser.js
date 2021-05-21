export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `evoytic.com has been updated. ` +
        `Please reload to display the new updates?`
    )
    if (answer === true) {
      window.location.reload()
    }
}
function extractLinks (inputString: string) {
  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g

  // Array to store the extracted URLs
  const extractedUrls: string[] = []

  // Replacing the URL with the desired HTML structure
  const modifiedString = inputString.replace(urlRegex, (url) => {
    const urlObject = new URL(url)
    const domain = urlObject.hostname
    extractedUrls.push(url)
    return `<span class='text-chatprimary underline'><a href="${url}" target="_blank" rel="noopener noreferrer">${domain}</a></span>`
  })

  return { links: extractedUrls, originalString: modifiedString }
}

export default extractLinks

import { NavigateFunction, useNavigate } from "react-router-dom"

interface Props {
  beforeLinkText: string,
  linkText: string,
  afterLinkText: string,
  link: string,
}

const CallToActionText = ({beforeLinkText, linkText, afterLinkText, link}:Props) => {
  const navigate:NavigateFunction = useNavigate()
  
  const goToLink = () => {
    navigate(link)
  }

  return <p className="callToAction-text">
    {`< ${beforeLinkText}`} <span className="callToAction-link" onClick={goToLink}>{`${linkText}`}</span> {`${afterLinkText} />`}
  </p>
}

export default CallToActionText
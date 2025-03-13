import Link from "next/link"

interface Props{
    src: string,
    sentence : string,
    link_sentence: string,
}

const LinkLoginRegister = ({src, sentence, link_sentence}: Props) => {
    return (
      <>
      <p className="text-center">
        <small className="d-block text-center mt-2">
          {sentence} <Link href={src}>{link_sentence}</Link>
        </small>
      </p>
      </>
    );
}

export default LinkLoginRegister;
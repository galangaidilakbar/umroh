export default function Button({
    childern,
}: { childern: React.ReactNode }) {
    return (
        <button>
            {childern}
        </button>
    )
}
import Button from "../../components/Button/Button";

export function MainComponent() {
    return <div>
        <Button enabled onClick={() => console.log('clicked')}>Push me</Button>
    </div>
}

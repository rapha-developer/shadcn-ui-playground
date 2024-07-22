import { Button } from "../ui/button"
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export const HeaderSearchDialog = () => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pesquise tutorial</DialogTitle>
                <DialogDescription>Pequisear um tutorial no nosso banco de dados</DialogDescription>
            </DialogHeader>
            <form action="" className="space-y-6">
                <div className="form-group grid grid-cols-12 items-center gap-2">
                    <Label htmlFor="search" className="col-span-3">Pesquise aqui:</Label>
                    <Input className="col-span-9" id="search" />
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button type="button" variant={'outline'}>
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button type="submit">Salvar</Button>
                </DialogFooter>
            </form>

        </DialogContent>
    )
}
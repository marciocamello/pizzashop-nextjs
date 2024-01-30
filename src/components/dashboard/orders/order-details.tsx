import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogHeader>Order: 234234wrtert</DialogHeader>
        <DialogDescription>Order Details</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Customer</TableCell>
              <TableCell className="flex justify-end">Marcio Vale</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Phone</TableCell>
              <TableCell className="flex justify-end">
                +351 999 999 999
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                marciovale@pizzashop.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Accomplished At
              </TableCell>
              <TableCell className="flex justify-end">at 15 minutes</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pepperoni Pizza</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">€19.99</TableCell>
              <TableCell className="text-right">€39.98</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Muzzarela Pizza</TableCell>
              <TableCell className="text-right">4</TableCell>
              <TableCell className="text-right">€14.99</TableCell>
              <TableCell className="text-right">€59.96</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Chicken Pizza</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">€19.99</TableCell>
              <TableCell className="text-right">€19.99</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right font-medium">€119.93</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}

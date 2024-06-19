import { Layout } from "./components/layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

const App = () => {
  return (
    <Layout>
      <div className="mb-1 rounded-t-[0.625rem] bg-[#e7e8eb] p-6 dark:bg-[#272725]">
        <div className="flex items-center justify-between">
          <Select defaultValue="value1">
            <SelectTrigger className="w-[12.5rem]">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="value1">Pacifica Tower 1</SelectItem>
              <SelectItem value="value2">Pacifica Tower 2</SelectItem>
              <SelectItem value="value3">Pacifica Tower 3</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-3 text-[#202024]">
            <div className="rounded-lg border bg-[#E2EED6] px-4 py-2 text-[0.8125rem]">
              Available
            </div>
            <div className="rounded-lg border bg-[#CED5FA] px-4 py-2 text-[0.8125rem]">
              Reserved
            </div>
            <div className="rounded-lg border bg-[#D6EEEE] px-4 py-2 text-[0.8125rem]">
              Offer
            </div>
            <div className="rounded-lg border bg-[#FACEF0] px-4 py-2 text-[0.8125rem]">
              Accepted
            </div>
            <div className="rounded-lg border bg-[#FACED3] px-4 py-2 text-[0.8125rem]">
              Sold
            </div>
            <div className="rounded-lg border bg-[#FB8895] px-4 py-2 text-[0.8125rem]">
              Sold firm
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background4 mb-1 flex items-center text-[0.8125rem] font-semibold">
        <div className="border-border2 basis-[81px] border-r pb-7 pt-5 text-center">
          Floor
        </div>
        <div className="flex grow items-center justify-between">
          <div className="border-border2 grow border-r pb-7 pt-5 text-center">
            North
          </div>
          <div className="border-border2 grow border-r pb-7 pt-5 text-center">
            East
          </div>
          <div className="border-border2 grow border-r pb-7 pt-5 text-center">
            South
          </div>
          <div className="grow pb-7 pt-5 text-center">West</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            12
          </div>
          <div className="grow bg-[#FACED3] py-2 text-center text-[#202024]">
            <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
              #1201 - 4Br / 2Ba
            </p>
            <p className="text-[0.6875rem] leading-[1.27]">(CA$ 105,000,000)</p>
          </div>
        </div>
        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            11
          </div>
          <div className="grow bg-[#E2EED6] py-2 text-center text-[#202024]">
            <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
              #1201 - 4Br / 2Ba
            </p>
            <p className="text-[0.6875rem] leading-[1.27]">(CA$ 105,000,000)</p>
          </div>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            10
          </div>
          <div className="flex grow gap-2 text-[#202024]">
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#D6EEEE] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            9
          </div>
          <div className="flex grow gap-2 text-[#202024]">
            <div className="grow bg-[#CED5FA] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            8
          </div>
          <div className="flex grow gap-2 text-[#202024]">
            <div className="grow-[3] bg-[#CED5FA] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow-[1] bg-[#FB8895] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            7
          </div>
          <div className="flex grow gap-2 text-[#202024]">
            <div className="grow bg-[#FB8895] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow-[2] bg-[#E2EED6] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            6
          </div>
          <div className="flex grow gap-2 text-[#202024]">
            <div className="grow bg-[#D6EEEE] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#CED5FA] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            5
          </div>
          <div className="flex grow gap-2 text-[#202024]">
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            4
          </div>
          <div className="flex grow gap-2 text-[#202024]">
            <div className="grow bg-[#FB8895] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#E2EED6] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#E2EED6] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#CED5FA] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#D6EEEE] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch gap-2">
          <div className="bg-background4 flex basis-[81px] items-center justify-center">
            3
          </div>
          <div className="flex grow gap-2 text-[#202024]">
            <div className="grow bg-[#FACEF0] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FB8895] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#FACED3] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#D6EEEE] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
            <div className="grow bg-[#CED5FA] py-2 text-center">
              <p className="mb-1 text-[0.8125rem] font-bold leading-[1.38]">
                #1201 - 4Br / 2Ba
              </p>
              <p className="text-[0.6875rem] leading-[1.27]">
                (CA$ 105,000,000)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;

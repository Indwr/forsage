import Circle from "./Circle";
import SmallCircle from "./SmallCircle";

const OnlyTree = (props: any) => {
  const tree = props?.trees;
  const arr: any = [0, 1];
  const treeData = tree?.users;
  return (
    <div className="flex justify-center mb-15 sm:mb-10">
      <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
        <div className="relative flex w-full justify-evenly items-start false false">
          {arr?.length > 0 &&
            arr?.map((_items: any, i: number) => (
              <div className="flex flex-col justify-around items-center  w-full">
                <Circle data={treeData?.[i]} />
                <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                  <div className="relative flex w-full justify-evenly items-start false false">
                    {arr?.map((_item2: any, i2: number) => (
                      <div className="flex flex-col justify-around items-center  w-full">
                        <Circle data={treeData?.[i]?.level_2[i2]} />

                        <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                          <div className="relative flex w-full justify-evenly items-start false false">
                            {arr?.map((_item: any, i3: number) => (
                              <div className="flex flex-col justify-around items-center  w-full">
                                <Circle
                                  data={treeData?.[i]?.level_2[i2]?.level_3[i3]}
                                />
                                <div className="flex w-full items-start justify-evenly mt-7.5 sm:mt-5 first:mt-0">
                                  <div className="relative flex w-full justify-evenly items-start false false">
                                    {arr?.map((_item: any, i4: number) => (
                                      <div className="flex flex-col justify-around items-center  false">
                                        <SmallCircle
                                          data={
                                            treeData?.[i]?.level_2[i2]?.level_3[
                                              i3
                                            ]?.level_4[i4]
                                          }
                                        />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OnlyTree;

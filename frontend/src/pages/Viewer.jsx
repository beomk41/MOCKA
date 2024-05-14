import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useProjectStore } from "../store";
import { getProjectDetail } from "../apis/project";
import Tab from "../components/Tab";
import BaseUrl from "../components/BaseUrl";
import Method from "../components/Method";
import PrettyJson from "../components/PrettyJson";
import formatRequestBody from "../utils/formatRequestBody";
import formatResponseBody from "../utils/fromatResponseBody";
import Button from "../components/button/Button";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Viewer({
  description,
  apiRequests,
  apiResponses,
  apiResponseIsArray,
}) {
  // request, response용
  const [searchParams] = useSearchParams();
  const { projectId } = useParams();
  const { project, setProject } = useProjectStore();
  const groupId = searchParams.get("groupId");
  const group =
    groupId && project.groups.filter((group) => group.groupId == groupId)[0];

  // Headers, Query Params, Path Variables, Body 선택
  const [activeText, setActiveText] = useState("");
  const texts = ["Headers", "Query Param", "Path Variables", "Body"];

  // 복사용
  const [apiUri, setApiUri] = useState("/api/user/detail/userId");
  const [response, setResponse] = useState("response data");

  //탭용
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabs, setTabs] = useState([
    { type: "GET", id: 0 },
    { type: "POST", id: 1 },
    { type: "PUT", id: 2 },
    { type: "DELETE", id: 3 },
    { type: "PATCH", id: 4 },
    { type: "PATCH", id: 5 },
  ]);

  useEffect(() => {
    if (!project) {
      getProjectDetail(projectId).then((data) => {
        setProject(data);
      });
    }
  }, [project]);

  const handleTextClick = (Text) => {
    setActiveText(Text);
  };

  //복사
  const handleApiCopyClick = () => {
    navigator.clipboard
      .writeText(apiUri)
      .then(() => {
        console.log("복사됨");
      })
      .catch((err) => {
        console.error("복사 안됨.", err);
      });
  };

  const handleResponseCopyClick = () => {
    navigator.clipboard
      .writeText(response)
      .then(() => {
        console.log("복사됨");
      })
      .catch((err) => {
        console.error("복사 안됨.", err);
      });
  };

  //탭
  const handleTabClick = (index) => {
    console.log(`Tab clicked: ${index}`);
    setSelectedTab(index);
  };

  const handleRemoveTab = (index) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== index));
    if (selectedTab === index && tabs.length > 1) {
      const remainingTabs = tabs.filter((tab) => tab.id !== index);
      setSelectedTab(remainingTabs[0].id);
    }
  };

  const moveTab = (dragIndex, hoverIndex) => {
    const dragTab = tabs[dragIndex];
    const newTabs = [...tabs];
    newTabs.splice(dragIndex, 1);
    newTabs.splice(hoverIndex, 0, dragTab);
    setTabs(newTabs);
  };

  const addTab = (type) => {
    const newId =
      tabs.length > 0 ? Math.max(...tabs.map((tab) => tab.id)) + 1 : 0;
    setTabs([...tabs, { type, id: newId }]);
  };

  function DraggableTab({ type, index, id }) {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "tab",
      item: { type, index, id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }));

    const [, drop] = useDrop(() => ({
      accept: "tab",
      hover(item) {
        if (item.index !== index) {
          moveTab(item.index, index);
          item.index = index;
        }
      },
    }));

    return (
      <div
        ref={(node) => drag(drop(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <Tab
          type={type}
          isSelected={selectedTab === id}
          onClick={() => handleTabClick(id)}
          onRemove={() => handleRemoveTab(id)}
        />
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="relative flex h-full w-full flex-col overflow-y-scroll">
        <div className="flex overflow-x-auto">
          {tabs.map((tab, index) => (
            <DraggableTab
              key={tab.id}
              type={tab.type}
              index={index}
              id={tab.id}
            />
          ))}
          <button
            onClick={() => addTab("NEW_TAB")}
            className="ml-2 flex h-[36px] w-[154px] flex-shrink-0 items-center justify-center rounded bg-gray-300"
          >
            <h5>+ Add Tab</h5>
          </button>
        </div>
        <div className="mb-[32px] mt-[32px] flex items-center justify-center">
          <div className="h-[900px] w-[1170px] rounded-[15px] border-[2px] border-gray-300 pl-[32px] pr-[32px]">
            <div className="mt-[24px] flex justify-between">
              <h2>사용자 조회</h2>
              <BaseUrl />
            </div>
            <div className="flex items-center">
              <div className="mt-[10px] flex h-[40px] w-[1072px] items-center rounded-[10px] bg-gray-100 pl-[8px] pr-[8px]">
                <Method
                  type={tabs.find((tab) => tab.id === selectedTab)?.type}
                />
                <h4 className="ml-[10px]">{apiUri}</h4>
              </div>
              <img
                src="/asset/tester/tester-copy.svg"
                className="ml-[18px] mt-[10px] h-4 cursor-pointer"
                onClick={handleApiCopyClick}
              />
            </div>

            {/* Request, Response박스 */}
            <div className="mt-[20px] h-[339px] border-2 border-gray-200 bg-white">
              <div className="flex h-[38px] items-center border-b-[2px] border-gray-200">
                <h4 className="ml-[14px]">Description</h4>
                <div className="ml-4 text-gray-700">{description}</div>
              </div>
              <div className="flex flex-row">
                <div className="flex h-[298px] flex-1 flex-col overflow-auto p-[14px]">
                  <h4 className="mb-2">Request Body</h4>
                  <PrettyJson data={formatRequestBody(apiRequests)} />
                </div>
                <div className="h-[298px] border-r-[2px]"></div>
                <div className="flex h-[298px] flex-1 flex-col overflow-auto p-[14px]">
                  <h4 className="mb-2">Response Body</h4>
                  <PrettyJson
                    data={formatResponseBody(apiResponses, apiResponseIsArray)}
                  />
                </div>
              </div>
            </div>

            {/* Request */}
            <div className="mt-[20px]">
              <div className="flex justify-between">
                <div>
                  <h2>Request</h2>
                  <h4 className="mt-[8px] text-gray-400">
                    If use mock data templates, request will automatically be
                    filled with templated mock data when sent.
                  </h4>
                </div>
                <div className="flex items-center">
                  <img
                    src="/asset/tester/tester-template-plus.svg"
                    className="mr-[10px] h-4 cursor-pointer"
                    alt="tester-template-plus"
                  />
                  <input
                    className="mr-[10px] h-[30px] w-[200px] rounded-[4px] border-[1px] border-gray-400 pl-[8px] text-[12px]"
                    placeholder="Template Name"
                  />
                  <Button type="Save" />
                </div>
              </div>

              {/* Headers, Query Params, Path Variables, Body 선택 */}
              <div className="mt-[14px] flex h-[30px] w-[500px] justify-between text-gray-400">
                {texts.map((text) => (
                  <h3
                    key={text}
                    className={`cursor-pointer ${activeText === text ? "text-black" : ""}`}
                    style={{
                      position: "relative",
                      color: activeText === text ? "black" : "inherit",
                      textDecoration: activeText === text ? "none" : "initial",
                    }}
                    onClick={() => handleTextClick(text)}
                  >
                    {text}
                    {activeText === text && (
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 8, // 밑줄을 더 아래로 떨어지게
                          height: "1px",
                          backgroundColor: "black",
                          width: "100%",
                        }}
                      />
                    )}
                  </h3>
                ))}
              </div>

              {/* 선택하고 밑에 생기는 박스들 만들기 */}
              <div></div>

              {/* Response (실제 데이터 전송하고 응답값 받는 걸로 바꾸기)*/}
              <div className="mt-[20px]">
                <div className="flex items-center justify-between">
                  <h2>Response</h2>
                  <img
                    src="/asset/tester/tester-copy.svg"
                    className="h-4 cursor-pointer"
                    onClick={handleResponseCopyClick}
                  />
                </div>
                <div className="mt-[20px] h-[180px] border-2 border-gray-200 bg-white">
                  <div className="flex flex-row">
                    <div className="flex h-[298px] flex-1 flex-col overflow-auto p-[14px]">
                      <PrettyJson
                        data={formatResponseBody(
                          apiResponses,
                          apiResponseIsArray,
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[20px] flex justify-end">
                  <Button type="Send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

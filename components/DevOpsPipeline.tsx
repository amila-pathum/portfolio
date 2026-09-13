import { pipelineSteps } from "@/lib/content";
import { pipelineIcons, PipelineArrowIcon } from "./icons";

export default function DevOpsPipeline() {
  return (
    <section id="devops" className="section-pad">
      <div className="wrap">
        <div style={{ maxWidth: "62ch", marginBottom: "clamp(34px,4vw,56px)" }}>
          <span data-reveal className="eyebrow">
            <span className="eyebrow-dot" />
            DevOps Focus
          </span>
          <h2 data-reveal className="section-title" style={{ marginBottom: 18 }}>
            From Code to <span className="accent-text">Deployment</span>
          </h2>
          <p data-reveal style={{ margin: 0, fontSize: 16, lineHeight: 1.72, color: "var(--mut)" }}>
            I&apos;m expanding beyond application development into DevOps, cloud infrastructure, automation, and
            reliable software delivery.
          </p>
        </div>

        <div data-reveal className="pipeline" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
          {pipelineSteps.map((step, i) => {
            const isCloud = step.icon === "cloud";
            const isLast = i === pipelineSteps.length - 1;
            const Icon = pipelineIcons[step.icon];
            return (
              <div key={step.index} className={`pipeline-step${isCloud ? " pipeline-step--cloud" : ""}`}>
                <div className="pipeline-top">
                  <span className={`pipeline-index${isCloud ? " pipeline-index--em" : ""}`}>{step.index}</span>
                  <span data-bar className="pipeline-bar" />
                </div>
                <span className={`pipeline-icon${isCloud ? " pipeline-icon--em" : ""}`}>
                  <Icon />
                </span>
                <h3 className={`pipeline-title${isCloud ? " pipeline-title--on-dark" : ""}`}>{step.title}</h3>
                <p className={`pipeline-sub${isCloud ? " pipeline-sub--on-dark" : ""}`}>{step.sub}</p>

                {!isLast && (
                  <span className="pipeline-connector" aria-hidden="true">
                    <PipelineArrowIcon />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
